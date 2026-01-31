import { estimateIncomeBureauOnly, ImputationInputs } from './incomeImputation';

function runTests() {
    const testCases: { name: string; inputs: ImputationInputs; expectedMin: number }[] = [
        {
            name: "Prime Borrower, High EMI",
            inputs: {
                totalEMI: 20000,
                creditScore: 760,
                assetClass: 'HL_STANDARD',
                locationTier: 'METRO',
                isCreditCardHighlyUtilized: false
            },
            expectedMin: 50000 // 20000 / 0.4 = 50000
        },
        {
            name: "Sub-Prime, Asset Cap Triggered",
            inputs: {
                totalEMI: 30000,
                creditScore: 660,
                assetClass: 'TWOWHEELER',
                locationTier: 'TIER1',
                isCreditCardHighlyUtilized: false
            },
            expectedMin: 35000 // (30000 / 0.6 = 50000) -> capped at 35000
        },
        {
            name: "High Utilization Haircut",
            inputs: {
                totalEMI: 10000,
                creditScore: 720,
                assetClass: 'NONE',
                locationTier: 'TIER2',
                isCreditCardHighlyUtilized: true
            },
            expectedMin: 16000 // (10000 / 0.5 = 20000) -> capped at 25000 -> 20000 * 0.8 = 16000
        },
        {
            name: "Minimum Wage Floor",
            inputs: {
                totalEMI: 2000,
                creditScore: 750,
                assetClass: 'NONE',
                locationTier: 'METRO',
                isCreditCardHighlyUtilized: false
            },
            expectedMin: 18000 // (2000 / 0.4 = 5000) -> cap 25000 -> floor 18000
        }
    ];

    console.log("Running Income Imputation Tests...");
    testCases.forEach(tc => {
        const result = estimateIncomeBureauOnly(tc.inputs);
        const pass = Math.abs(result.finalEstimatedIncome - tc.expectedMin) < 1;
        console.log(`${tc.name}: ${pass ? 'PASSED' : 'FAILED'} (Got ${result.finalEstimatedIncome}, Expected ${tc.expectedMin})`);
    });
}

runTests();
