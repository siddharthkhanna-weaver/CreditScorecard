const fs = require('fs');
const path = require('path');

const sourceDir = '/Users/siddharthkhanna/Documents/Research/Scorecard';
const targetFile = '/Users/siddharthkhanna/.gemini/antigravity/scratch/housing-scorecard/src/lib/docsContent.ts';

const filesToSync = [
    'Cohort_Movement_Tracker_Template.md',
    'Crosstab_Cohort_Framework.md',
    'Housing_Finance_Applicant_Evaluation_Scorecard_Research.md',
    'Income_Imputation_Bureau_Only.md',
    'Income_Imputation_Bureau_Plus_BankStatement.md',
    'Scorecard_Quick_Reference_Tables.md'
];

const docTitles = {
    // Research Documents (Full Fidelity)
    'Scorecard_Quick_Reference_Tables.md': 'Quick Reference Tables',
    'Cohort_Movement_Tracker_Template.md': 'Cohort Movement Tracker',
    'Crosstab_Cohort_Framework.md': 'Crosstab Cohort Framework',
    'Housing_Finance_Applicant_Evaluation_Scorecard_Research.md': 'Scorecard Research Detail',
    'Income_Imputation_Bureau_Only.md': 'Income Imputation (Bureau)',
    'Income_Imputation_Bureau_Plus_BankStatement.md': 'Income Imputation (Bureau + Bank)',

    // Implementation Summaries (Focused Guides)
    'Implementation_Bureau_Only.md': 'Bureau Based Income',
    'Implementation_Bureau_Plus_BankStatement.md': 'Bureau & Banking Based Income'
};

const implementationSummaries = {
    'Implementation_Bureau_Only.md': `# Bureau Based Income Estimation (Implementation)

This module implements a conservative "Reverse FOIR" methodology to estimate monthly income when traditional documents are unavailable.

## Logic Overview
1. **EMI Aggregation**: Sums all active EMIs from the bureau report (HL, AL, PL, CC, etc.).
2. **Reverse FOIR**: Calculates basic income support \`Estimated_Income = Total_EMI / 0.50\` (assuming 50% FOIR).
3. **Regulatory Caps**: 
   - Applies an **Asset Class Income Floor** based on the presence of high-value loans.
   - Caps estimated income to prevent over-leveraging.
4. **CC Utilization Haircut**: Applies a 20% haircut to income if credit card utilization exceeds 70%.`,

    'Implementation_Bureau_Plus_BankStatement.md': `# Bureau & Banking Based Income (Implementation)

This advanced module combines bureau credit history with real-time bank cash flow analysis for high-fidelity income triangulation.

## Implementation Pillars
1. **Account Aggregator (AA)**: Securely fetches 6-12 months of bank transactions.
2. **Transaction Categorization**: 
   - Uses regex and keyword matching to identify 'Salary', 'Business Credits', and 'Rental Income'.
   - Detects negative entries (Bounces, Inward Returns, High-value Transfers).
3. **Income Detection**: 
   - Groups recurring credits to identify stable income streams.
   - Calculates the **Average Monthly Balance (AMB)** as a secondary proof of capacity.
4. **Triangulation**: Cross-verifies bureau-implied income against bank-observed cash flow to detect income inflation or distress.`
};

let content = `export const docTitles: Record<string, string> = ${JSON.stringify(docTitles, null, 2)};\n\n`;
content += 'export const docsContent: Record<string, string> = {};\n\n';

filesToSync.forEach(filename => {
    const filePath = path.join(sourceDir, filename);
    console.log(`Processing ${filename}...`);
    if (fs.existsSync(filePath)) {
        let fileBody = fs.readFileSync(filePath, 'utf8');

        // Escape backslashes first, then backticks and ${
        const escapedBody = fileBody
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`')
            .replace(/\${/g, '\\${');

        content += `docsContent["${filename}"] = \`${escapedBody}\`;\n\n`;
    } else {
        console.warn(`File not found: ${filePath}`);
    }
});

// Add implementation summaries
Object.entries(implementationSummaries).forEach(([filename, body]) => {
    const escapedBody = body
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\${/g, '\\${');
    content += `docsContent["${filename}"] = \`${escapedBody}\`;\n\n`;
});

fs.writeFileSync(targetFile, content);
console.log('Successfully synced all documentation to src/lib/docsContent.ts');
