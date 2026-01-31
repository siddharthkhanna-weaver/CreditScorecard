import { FinancialInfo, LoanDetails } from './types';

export function calculateEMI(principal: number, annualRatePercent: number, tenureMonths: number): number {
    if (tenureMonths <= 0) return 0;
    if (annualRatePercent <= 0) return principal / tenureMonths;

    const monthlyRate = annualRatePercent / (12 * 100);
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    return emi;
}

export function calculateLTV(loanAmount: number, propertyValue: number): number {
    if (propertyValue <= 0) return 0;
    return (loanAmount / propertyValue) * 100;
}

export function calculateFOIR(
    financials: FinancialInfo,
    proposedEMI: number
): number {
    const totalIncome = financials.grossMonthlyIncome + financials.otherMonthlyIncome;
    if (totalIncome <= 0) return 100; // High risk if no income

    const totalObligations = financials.existingMonthlyObligations + proposedEMI;
    return (totalObligations / totalIncome) * 100;
}

// In this context, DTI usually refers to Back-End DTI which is similar to FOIR but sometimes defined slightly differently.
// We will use FOIR as the primary metric for India as per research, but calculate DTI (Back-End) as well for completeness.
// Front-End DTI is just Housing Expense / Income.
export function calculateFrontEndDTI(
    financials: FinancialInfo,
    proposedEMI: number // Assuming this covers P&I. Property tax/insurance would be extra but we'll stick to EMI for now.
): number {
    const totalIncome = financials.grossMonthlyIncome + financials.otherMonthlyIncome;
    if (totalIncome <= 0) return 100;

    return (proposedEMI / totalIncome) * 100;
}
