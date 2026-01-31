export enum EmploymentType {
    SalariedGovernment = 'Salaried (Government)',
    SalariedPSU = 'Salaried (PSU)',
    SalariedMNC = 'Salaried (MNC)',
    SalariedPrivate = 'Salaried (Private)',
    SelfEmployedProfessional = 'Self-Employed Professional',
    SelfEmployedBusiness = 'Self-Employed Business',
    Informal = 'Informal Sector'
}

export enum RiskTier {
    Tier1 = 'Tier 1 (Prime)',
    Tier2 = 'Tier 2 (Near-Prime)',
    Tier3 = 'Tier 3 (Sub-Prime)',
    Tier4 = 'Tier 4 (Deep Sub-Prime)'
}

export enum Decision {
    Approve = 'APPROVE',
    Refer = 'REFER',
    Decline = 'DECLINE'
}

export interface ApplicantProfile {
    age: number;
    creditScore: number;
    employmentType: EmploymentType;
    employmentTenureYears: number; // For salaried: years in current job. For SE: business vintage.
    residenceStabilityYears: number;
}

export interface FinancialInfo {
    grossMonthlyIncome: number;
    otherMonthlyIncome: number; // Bonus, rental, etc.
    existingMonthlyObligations: number; // EMIs, credit card minimums, etc.
}

export interface LoanDetails {
    loanAmountRequest: number;
    loanTenureMonths: number;
    propertyValue: number;
    interestRate: number; // Base rate before adjustments
}

export enum Cohort {
    Green = 'GREEN',
    Amber = 'AMBER',
    Red = 'RED'
}

export enum ApplicationScoreBand {
    A1 = 'A1 (80-100)',
    A2 = 'A2 (65-79)',
    A3 = 'A3 (50-64)',
    A4 = 'A4 (35-49)',
    A5 = 'A5 (<35)'
}

export enum BureauScoreBand {
    B1 = 'B1 (750+)',
    B2 = 'B2 (700-749)',
    B3 = 'B3 (650-699)',
    B4 = 'B4 (600-649)',
    B5 = 'B5 (<600)',
    NTC = 'NTC (No Score)'
}

export interface ApplicationScoreBreakdown {
    totalScore: number;
    band: ApplicationScoreBand;
    breakdown: {
        foirScore: number;
        ltvScore: number;
        tenureScore: number;
        stabilityScore: number;
    }
}

export interface ScorecardResult {
    decision: Decision;
    riskTier: RiskTier;
    cohort: Cohort; // New Logic
    applicationScore: ApplicationScoreBreakdown; // New Logic
    recommendedRate: number;
    maxEligibleLoanAmount: number;
    metrics: {
        ltv: number;
        dti: number; // Back-end DTI
        foir: number;
    };
    messages: string[]; // Explanations for the decision
}
