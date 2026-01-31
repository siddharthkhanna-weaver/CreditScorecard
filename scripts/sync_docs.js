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
    'Scorecard_Quick_Reference_Tables.md': 'Quick Reference Tables',
    'Cohort_Movement_Tracker_Template.md': 'Cohort Movement Tracker',
    'Crosstab_Cohort_Framework.md': 'Crosstab Cohort Framework',
    'Housing_Finance_Applicant_Evaluation_Scorecard_Research.md': 'Scorecard Research Detail',
    'Income_Imputation_Bureau_Only.md': 'Bureau Based Income',
    'Income_Imputation_Bureau_Plus_BankStatement.md': 'Bureau & Banking Based Income'
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

fs.writeFileSync(targetFile, content);
console.log('Successfully synced all documentation to src/lib/docsContent.ts');
