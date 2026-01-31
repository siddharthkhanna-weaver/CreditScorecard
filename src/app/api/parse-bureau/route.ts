import { NextRequest, NextResponse } from 'next/server';
import PDFParser from 'pdf2json';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Promise wrapper for pdf2json
        const pdfParser = new PDFParser(undefined, true); // true = text only mode

        const textPromise = new Promise<string>((resolve, reject) => {
            pdfParser.on("pdfParser_dataError", (errData: any) => reject(errData.parserError));
            pdfParser.on("pdfParser_dataReady", (pdfData: any) => {
                // Extract plain text from the JSON structure
                let rawText = "";
                pdfData.Pages.forEach((page: any) => {
                    page.Texts.forEach((text: any) => {
                        try {
                            // decodeURIComponent is needed as pdf2json encodes characters
                            rawText += decodeURIComponent(text.R[0].T) + " ";
                        } catch (e) {
                            rawText += text.R[0].T + " ";
                        }
                    });
                    rawText += "\n";
                });
                resolve(rawText);
            });
            pdfParser.parseBuffer(buffer);
        });

        const text = await textPromise;
        // Normalize text: Handle cases where characters have spaces between them
        // 1. Convert double+ spaces to a special marker
        // 2. Remove single spaces (which are likely kerning gaps)
        // 3. Convert marker back to single space
        const normalizedText = text
            .replace(/\s{2,}/g, ' __GAP__ ')
            .replace(/([A-Za-z0-9])\s(?=[A-Za-z0-9])/g, '$1')
            .replace(/__GAP__/g, ' ');

        console.log('Normalized Text Snippet:', normalizedText.substring(0, 500));
        const debtIndex = normalizedText.indexOf('TotalDebt');
        if (debtIndex !== -1) {
            console.log('Debt Area Snippet:', normalizedText.substring(debtIndex, debtIndex + 100));
        } else {
            const totalIndex = normalizedText.indexOf('Total');
            if (totalIndex !== -1) {
                console.log('Total Area Snippet:', normalizedText.substring(totalIndex, totalIndex + 100));
            }
        }

        // Extraction: Credit Score
        const scoreMatch = normalizedText.match(/YourCIBILScoreis\s*(\d{3})/i) ||
            normalizedText.match(/CreditScore\s*(\d{3})/i) ||
            normalizedText.match(/(\d{3})\s*(Excellent|Good|Average|Poor)/i) ||
            normalizedText.match(/Score\s+is\s+(\d{3})/i);
        const creditScore = scoreMatch ? parseInt(scoreMatch[1]) : null;

        // Extraction: Total Debt Exposure (Try summary first, then sum individual balances)
        const debtSummaryMatch = normalizedText.match(/Total\s*Debt\s*Exposure\s*(?:is)?[\s:₹]*([\d,]+)/i) ||
            normalizedText.match(/Total\s*Debt[\s:₹]*([\d,]+)/i);

        let totalDebt = debtSummaryMatch ? parseInt(debtSummaryMatch[1].replace(/,/g, '')) : null;

        if (!totalDebt) {
            // Fallback: Sum all CurrentBalance occurrences (typical for CIBIL reports)
            const balanceMatches = Array.from(normalizedText.matchAll(/CurrentBalance\s*[₹:]*\s*([\d,]+)/gi));
            if (balanceMatches.length > 0) {
                totalDebt = balanceMatches.reduce((acc, m) => acc + parseInt(m[1].replace(/,/g, '')), 0);
            }
        }

        // Extraction: Monthly EMI (Try summary first, then sum all EMIAmount/Monthly EMI entries)
        const emiSummaryMatch = normalizedText.match(/Monthly\s*EMI[\s:₹]*([\d,]+)/i) ||
            normalizedText.match(/Total\s*EMI[\s:₹]*([\d,]+)/i) ||
            normalizedText.match(/Monthly\s*Obligation[\s:₹]*([\d,]+)/i);

        let totalEMI = emiSummaryMatch ? parseInt(emiSummaryMatch[1].replace(/,/g, '')) : null;

        if (!totalEMI) {
            // Fallback: Sum all individual EMI entries
            const emiMatches = Array.from(normalizedText.matchAll(/(?:EMIAmount|Monthly\s*EMI)\s*[₹:]*\s*([\d,]+)/gi));
            if (emiMatches.length > 0) {
                totalEMI = emiMatches.reduce((acc, m) => acc + parseInt(m[1].replace(/,/g, '')), 0);
            }
        }

        // Extraction: Location (More cities)
        let locationTier: 'METRO' | 'TIER1' | 'TIER2' = 'TIER2';
        const metroRegex = /MUMBAI|DELHI|BANGALORE|HYDERABAD|CHENNAI|KOLKATA|NCR|GURGAON|NOIDA|POWAI/i;
        const tier1Regex = /PUNE|AHMEDABAD|JAIPUR|LUCKNOW|CHANDIGARH|INDORE|COIMBATORE|NAGPUR/i;

        if (metroRegex.test(normalizedText)) {
            locationTier = 'METRO';
        } else if (tier1Regex.test(normalizedText)) {
            locationTier = 'TIER1';
        }

        // Extraction: Asset Class
        let assetClass: 'HL_PREMIUM' | 'HL_STANDARD' | 'CAR_LUXURY' | 'CAR_STD' | 'TWOWHEELER' | 'NONE' = 'NONE';
        if (/HousingLoan|HomeLoan|Housing\s*Loan|Home\s*Loan/i.test(normalizedText)) {
            assetClass = (totalDebt && totalDebt > 5000000) ? 'HL_PREMIUM' : 'HL_STANDARD';
        } else if (/CarLoan|Car\s*Loan/i.test(normalizedText)) {
            assetClass = (totalDebt && totalDebt > 1500000) ? 'CAR_LUXURY' : 'CAR_STD';
        } else if (/TwoWheeler|Two\s*Wheeler/i.test(normalizedText)) {
            assetClass = 'TWOWHEELER';
        }

        // Extraction: Credit Utilization (Improved check)
        const utilMatch = normalizedText.match(/Credit\s*limit\s*used[\s:]*(\d+)\s*%/i) ||
            normalizedText.match(/Utilisation\s*(\d+)\s*%/i);
        let isCreditCardHighlyUtilized = utilMatch ? parseInt(utilMatch[1]) > 90 : false;

        // CIBIL Credit Card Utilization fallback
        if (!isCreditCardHighlyUtilized && normalizedText.includes('CreditCard')) {
            const cardMatches = normalizedText.matchAll(/CreditLimit\s*[₹:]*\s*([\d,]+).*?CurrentBalance\s*[₹:]*\s*([\d,]+)/gi);
            for (const match of cardMatches) {
                const limit = parseInt(match[1].replace(/,/g, ''));
                const balance = parseInt(match[2].replace(/,/g, ''));
                if (limit > 0 && (balance / limit) > 0.5) {
                    isCreditCardHighlyUtilized = true;
                    break;
                }
            }
        }

        console.log('Extracted Data:', {
            creditScore,
            totalEMI,
            totalDebt,
            locationTier,
            assetClass,
            isCreditCardHighlyUtilized
        });

        return NextResponse.json({
            text: normalizedText.substring(0, 5000),
            extracted: {
                creditScore,
                totalEMI,
                totalDebt,
                locationTier,
                assetClass,
                isCreditCardHighlyUtilized
            }
        });

    } catch (error: any) {
        console.error('PDF Parse Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
