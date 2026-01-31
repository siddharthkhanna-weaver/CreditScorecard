import { ApplicantProfile, FinancialInfo, ApplicationScoreBand, ApplicationScoreBreakdown } from './types';
import { calculateFOIR } from './calculators';

// Scoring Weights (Max 100)
// FOIR: 40
// LTV: 30
// Tenure: 20
// Stability: 10

export function calculateFOIRScore(foir: number): number {
    if (foir < 30) return 40;
    if (foir < 40) return 35;
    if (foir < 50) return 25;
    return 10;
}

export function calculateLTVScore(ltv: number): number {
    if (ltv < 60) return 30;
    if (ltv < 75) return 25;
    if (ltv <= 80) return 20;
    return 10;
}

export function calculateTenureScore(years: number): number {
    if (years >= 5) return 20;
    if (years >= 3) return 15;
    if (years >= 1) return 10;
    return 0;
}

export function calculateStabilityScore(years: number): number {
    if (years >= 5) return 10;
    if (years >= 2) return 5;
    return 0;
}

export function getApplicationScoreBand(score: number): ApplicationScoreBand {
    if (score >= 80) return ApplicationScoreBand.A1;
    if (score >= 65) return ApplicationScoreBand.A2;
    if (score >= 50) return ApplicationScoreBand.A3;
    if (score >= 35) return ApplicationScoreBand.A4;
    return ApplicationScoreBand.A5;
}

export function calculateApplicationScore(
    applicant: ApplicantProfile,
    financials: FinancialInfo,
    ltv: number,
    foir: number, // Using provided FOIR to ensure consistency
): ApplicationScoreBreakdown {

    const foirScore = calculateFOIRScore(foir);
    const ltvScore = calculateLTVScore(ltv);
    const tenureScore = calculateTenureScore(applicant.employmentTenureYears);
    const stabilityScore = calculateStabilityScore(applicant.residenceStabilityYears);

    const totalScore = foirScore + ltvScore + tenureScore + stabilityScore;

    return {
        totalScore,
        band: getApplicationScoreBand(totalScore),
        breakdown: {
            foirScore,
            ltvScore,
            tenureScore,
            stabilityScore
        }
    };
}
