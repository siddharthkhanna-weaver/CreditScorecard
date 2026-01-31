const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('/Users/siddharthkhanna/Documents/Research/Scorecard/9833237302_highmark_jan2026.pdf');

pdf(dataBuffer).then(function (data) {
    console.log('TEXT_START');
    console.log(data.text);
    console.log('TEXT_END');
}).catch(err => {
    console.error(err);
});
