import { evaluateApplicant } from './scorecard';
import { EmploymentType, RiskTier, Decision } from './types';

// Mock Data Generators
const primeApplicant = {
    age: 35,
    creditScore: 800,
    employmentType: EmploymentType.SalariedMNC,
    employmentTenureYears: 5,
    residenceStabilityYears: 3
};

const subPrimeApplicant = {
    age: 35,
    creditScore: 600,
    employmentType: EmploymentType.SelfEmployedBusiness,
    employmentTenureYears: 2,
    residenceStabilityYears: 2
};

const strongFinancials = {
    grossMonthlyIncome: 200000,
    otherMonthlyIncome: 0,
    existingMonthlyObligations: 20000
};

// High obligations
const weakFinancials = {
    grossMonthlyIncome: 100000,
    otherMonthlyIncome: 0,
    existingMonthlyObligations: 60000
};

const standardLoan = {
    loanAmountRequest: 5000000,
    loanTenureMonths: 240,
    propertyValue: 8000000, // LTV ~62.5%
    interestRate: 0
};

console.log('--- Running Scorecard Engine Tests ---');

// Case 1: Prime Borrower
// Expect: Tier 1, Green Cohort, High App Score
const res1 = evaluateApplicant(primeApplicant, strongFinancials, standardLoan);
console.log('\nCase 1 (Prime):');
console.log(`Decision: ${res1.decision} (Expected: APPROVE)`);
console.log(`Tier: ${res1.riskTier} (Expected: Tier 1)`);
console.log(`Cohort: ${res1.cohort} (Expected: GREEN)`);
console.log(`App Score: ${res1.applicationScore.totalScore} (${res1.applicationScore.band})`);

// Case 2: SubPrime Credit Score
// Expect: Tier 4, Red Cohort (due to B5 band)
const res2 = evaluateApplicant(subPrimeApplicant, strongFinancials, standardLoan);
console.log('\nCase 2 (Bad Credit Score):');
console.log(`Decision: ${res2.decision} (Expected: DECLINE)`);
console.log(`Cohort: ${res2.cohort} (Expected: RED)`);
console.log(`App Score: ${res2.applicationScore.totalScore} vs Bureau Band B5`);

// Case 3: Mixed Profile (Good App, Bad Bureau)
// High Income, Low Score
const mixedApplicant = { ...primeApplicant, creditScore: 620 }; // Band B4
const resMixed = evaluateApplicant(mixedApplicant, strongFinancials, standardLoan);
console.log('\nCase 3 (Good App, Bad Bureau):');
console.log(`Cohort: ${resMixed.cohort} (Expected: AMBER for A1-B4)`);
console.log(`App Score: ${resMixed.applicationScore.totalScore} (${resMixed.applicationScore.band})`);

// Case 4: Weak App (Low tenure, high FOIR), Good Bureau
const weakAppApplicant = { ...primeApplicant, employmentTenureYears: 0.5 };
const resWeakApp = evaluateApplicant(weakAppApplicant, weakFinancials, standardLoan);
console.log('\nCase 4 (Weak App, Good Bureau):');
console.log(`Cohort: ${resWeakApp.cohort}`);
console.log(`App Score: ${resWeakApp.applicationScore.totalScore} (${resWeakApp.applicationScore.band})`);

// Case 3: High FOIR
// Expect: Decline due to FOIR > 65%
// Loan 50L, Tenure 20y, Rate ~8.5% -> EMI ~43k.
// Income 100k, Existing 60k. Total Oblig = 103k. FOIR > 100%.
const res3 = evaluateApplicant(primeApplicant, weakFinancials, standardLoan);
console.log('\nCase 3 (High FOIR):');
console.log(`Decision: ${res3.decision} (Expected: DECLINE)`);
console.log(`FOIR: ${res3.metrics.foir}%`);

// Case 4: High LTV
// Loan 75L, Value 80L -> 93.75% LTV.
// Expect: High Risk, Tier 4 probably (LTV > 90 is usually decline or very high risk).
// Tier logic: >85% is Tier 4.
const highLTVLoan = { ...standardLoan, loanAmountRequest: 7500000, propertyValue: 8000000 };
const res4 = evaluateApplicant(primeApplicant, strongFinancials, highLTVLoan);
console.log('\nCase 4 (High LTV):');
console.log(`Decision: ${res4.decision}`);
console.log(`Tier: ${res4.riskTier} (Expected: Tier 4)`);
console.log(`LTV: ${res4.metrics.ltv}%`);
