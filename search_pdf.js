const fs = require('fs');
const text = fs.readFileSync('pdf_output.txt', 'utf8');
const lines = text.split('\n');

lines.forEach((line, index) => {
    if (line.toLowerCase().includes('installment') || line.toLowerCase().includes('payment') || line.toLowerCase().includes('amount') || line.toLowerCase().includes('sanctioned')) {
        console.log(`${index + 1}: ${line}`);
    }
});
