import {
    ApplicantProfile,
    FinancialInfo,
    LoanDetails,
    ScorecardResult,
    Decision
} from './types';
import {
    calculateEMI,
    calculateLTV,
    calculateFOIR,
    calculateFrontEndDTI
} from './calculators';
import {
    BASE_INTEREST_RATE,
    determineCreditScoreTier,
    determineLTVTier,
    determineFOIRTier,
    calculateOverallRiskTier,
    getPricingAdjustment,
    makeDecision,
    determineBureauBand, // New
    determineCohort      // New
} from './rules';
import { calculateApplicationScore } from './applicationScore'; // New
import { Cohort } from './types'; // New

export function evaluateApplicant(
    applicant: ApplicantProfile,
    financials: FinancialInfo,
    loan: LoanDetails
): ScorecardResult {
    // 1. Initial Calculations with Base Rate (to determine Risk Tier)
    // We use Base Rate to separate the "Risk Profile" from the "Pricing Impact".
    // Ideally, a high risk borrower gets a high rate, which increases EMI, which increases FOIR, which might disqualify them.
    // We will do a 2-step evaluation.

    const initialRate = BASE_INTEREST_RATE;
    const initialEMI = calculateEMI(loan.loanAmountRequest, initialRate, loan.loanTenureMonths);

    const ltv = calculateLTV(loan.loanAmountRequest, loan.propertyValue);
    const initialFoir = calculateFOIR(financials, initialEMI);

    // 2. Risk Tier Assessment
    const scoreTier = determineCreditScoreTier(applicant.creditScore);
    const ltvTier = determineLTVTier(ltv);
    const foirTier = determineFOIRTier(initialFoir);

    const overallRiskTier = calculateOverallRiskTier(scoreTier, ltvTier, foirTier);

    // 3. Final Pricing & Affordability Check
    const pricingAdj = getPricingAdjustment(overallRiskTier);
    const finalRate = initialRate + pricingAdj;

    const finalEMI = calculateEMI(loan.loanAmountRequest, finalRate, loan.loanTenureMonths);
    const finalFoir = calculateFOIR(financials, finalEMI);
    const finalDti = calculateFrontEndDTI(financials, finalEMI); // Actually using Back-End logic in calculator but labeled DTI

    // 4. Decision Logic
    const { decision: initialDecision, reasons } = makeDecision(
        overallRiskTier,
        finalFoir,
        applicant.employmentTenureYears,
        applicant.employmentType
    );

    // 5. Application Score & Cohort Logic
    const appScoreBreakdown = calculateApplicationScore(applicant, financials, ltv, finalFoir);
    const bureauBand = determineBureauBand(applicant.creditScore);
    const cohort = determineCohort(appScoreBreakdown.band, bureauBand);

    // Decision Hierarchy: 
    // 1. Hard Rules (from makeDecision) - e.g. FOIR > 65 -> DECLINE
    // 2. Cohort Matrix - RED -> DECLINE, AMBER -> REFER, GREEN -> APPROVE

    let finalDecision = initialDecision; // Start with Hard Rule decision

    if (finalDecision !== Decision.Decline) {
        // If not already declined by hard rules, let Cohort decide
        if (cohort === Cohort.Red) {
            finalDecision = Decision.Decline;
            reasons.push('Declined by Cohort Matrix (Red Cohort).');
        } else if (cohort === Cohort.Amber) {
            finalDecision = Decision.Refer;
            reasons.push('Refer for Manual Review (Amber Cohort).');
        } else {
            finalDecision = Decision.Approve;
        }
    }

    // 6. Max Eligible Loan Calculation
    // Reverse calculate Principal based on Max FOIR of 50% (Standard)
    // MaxAllowedObligations = TotalIncome * 0.50
    // MaxAvailableForEMI = MaxAllowedObligations - ExistingObligations
    const totalIncome = financials.grossMonthlyIncome + financials.otherMonthlyIncome;
    const maxAllowedObligations = totalIncome * 0.50;
    const maxAvailableForEMI = maxAllowedObligations - financials.existingMonthlyObligations;

    let maxEligibleLoanAmount = 0;
    if (maxAvailableForEMI > 0) {
        // Formula: P = (EMI * ((1+r)^n - 1)) / (r * (1+r)^n)
        const r = finalRate / (12 * 100);
        const n = loan.loanTenureMonths;
        if (r === 0) {
            maxEligibleLoanAmount = maxAvailableForEMI * n;
        } else {
            maxEligibleLoanAmount = (maxAvailableForEMI * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
        }
    }

    // Add specific messages if declined components
    const displayMessages = [...reasons];
    if (ltv > 90) displayMessages.push(`LTV (${ltv.toFixed(1)}%) is extremely high.`);
    if (applicant.creditScore < 650) displayMessages.push(`Credit Score (${applicant.creditScore}) is low.`);

    return {
        decision: finalDecision,
        riskTier: overallRiskTier,
        cohort,
        applicationScore: appScoreBreakdown,
        recommendedRate: parseFloat(finalRate.toFixed(2)),
        maxEligibleLoanAmount: Math.floor(maxEligibleLoanAmount),
        metrics: {
            ltv: parseFloat(ltv.toFixed(2)),
            dti: parseFloat(finalFoir.toFixed(2)), // Reporting FOIR as the primary debt metric
            foir: parseFloat(finalFoir.toFixed(2))
        },
        messages: displayMessages
    };
}
