/**
 * Income Imputation Logic
 * Based on: Income_Imputation_Bureau_Only.md and Income_Imputation_Bureau_Plus_BankStatement.md
 */

export interface ImputationInputs {
    totalEMI: number;
    creditScore: number;
    assetClass: 'HL_PREMIUM' | 'HL_STANDARD' | 'CAR_LUXURY' | 'CAR_STD' | 'TWOWHEELER' | 'NONE';
    locationTier: 'METRO' | 'TIER1' | 'TIER2';
    isCreditCardHighlyUtilized: boolean; // if > 90%
}

export interface ImputationResult {
    baseEstimatedIncome: number;
    cappedIncome: number;
    finalEstimatedIncome: number;
    assumedFOIR: number;
    appliedCap: number;
    appliedFloor: number;
    haircutApplied: boolean;
}

export function estimateIncomeBureauOnly(inputs: ImputationInputs): ImputationResult {
    const { totalEMI, creditScore, assetClass, locationTier, isCreditCardHighlyUtilized } = inputs;

    // 1. Base Calculation (Assumed FOIR)
    let assumedFOIR = 0;
    if (creditScore >= 750) {
        assumedFOIR = 0.40;
    } else if (creditScore >= 700) {
        assumedFOIR = 0.50;
    } else if (creditScore >= 650) {
        assumedFOIR = 0.60;
    } else {
        // Under 650, this method is not recommended as per research
        return {
            baseEstimatedIncome: 0,
            cappedIncome: 0,
            finalEstimatedIncome: 0,
            assumedFOIR: 0,
            appliedCap: 0,
            appliedFloor: 0,
            haircutApplied: false
        };
    }

    const baseEstimatedIncome = totalEMI / assumedFOIR;
    let currentIncome = baseEstimatedIncome;

    // 2. Apply Asset Cap
    const caps: Record<string, number> = {
        'HL_PREMIUM': 300000,
        'HL_STANDARD': 150000,
        'CAR_LUXURY': 100000,
        'CAR_STD': 75000,
        'TWOWHEELER': 35000,
        'NONE': 25000
    };
    const appliedCap = caps[assetClass] || 25000;
    const cappedIncome = Math.min(currentIncome, appliedCap);
    currentIncome = cappedIncome;

    // 3. Haircut for high credit card utilization (20% haircut)
    let haircutApplied = false;
    if (isCreditCardHighlyUtilized) {
        currentIncome = currentIncome * 0.8;
        haircutApplied = true;
    }

    // 4. Floor check (Minimum living wage)
    const minWages: Record<string, number> = {
        'METRO': 18000,
        'TIER1': 15000,
        'TIER2': 12000
    };
    const appliedFloor = minWages[locationTier] || 12000;
    const finalEstimatedIncome = Math.max(currentIncome, appliedFloor);

    return {
        baseEstimatedIncome,
        cappedIncome,
        finalEstimatedIncome,
        assumedFOIR,
        appliedCap,
        appliedFloor,
        haircutApplied
    };
}
