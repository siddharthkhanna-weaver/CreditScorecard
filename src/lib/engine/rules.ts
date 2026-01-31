import { RiskTier, Decision, EmploymentType, BureauScoreBand, ApplicationScoreBand, Cohort } from './types';

// Constants based on research
export const BASE_INTEREST_RATE = 8.50; // Typical starting rate for prime home loans in India

export function determineCreditScoreTier(score: number): RiskTier {
    if (score >= 750) return RiskTier.Tier1;
    if (score >= 700) return RiskTier.Tier2;
    if (score >= 650) return RiskTier.Tier3;
    return RiskTier.Tier4;
}

export function determineLTVTier(ltv: number): RiskTier {
    if (ltv <= 75) return RiskTier.Tier1;
    if (ltv <= 80) return RiskTier.Tier2;
    if (ltv <= 85) return RiskTier.Tier3;
    return RiskTier.Tier4;
}

export function determineFOIRTier(foir: number): RiskTier {
    if (foir <= 40) return RiskTier.Tier1;
    if (foir <= 50) return RiskTier.Tier2;
    if (foir <= 55) return RiskTier.Tier3;
    return RiskTier.Tier4;
}

// "Weakest Link" approach: The overall risk is determined by the worst specific metric
export function calculateOverallRiskTier(
    scoreTier: RiskTier,
    ltvTier: RiskTier,
    foirTier: RiskTier
): RiskTier {
    const tiers = [scoreTier, ltvTier, foirTier];

    if (tiers.includes(RiskTier.Tier4)) return RiskTier.Tier4;
    if (tiers.includes(RiskTier.Tier3)) return RiskTier.Tier3;
    if (tiers.includes(RiskTier.Tier2)) return RiskTier.Tier2;
    return RiskTier.Tier1;
}

export function getPricingAdjustment(tier: RiskTier): number {
    switch (tier) {
        case RiskTier.Tier1: return 0.00;
        case RiskTier.Tier2: return 0.35; // Avg of 0.25-0.50
        case RiskTier.Tier3: return 1.10; // Avg of 0.75-1.50
        case RiskTier.Tier4: return 2.50; // > 2.00
        default: return 0;
    }
}

export function makeDecision(
    riskTier: RiskTier,
    foir: number,
    employmentYears: number,
    employmentType: EmploymentType
): { decision: Decision; reasons: string[] } {
    const reasons: string[] = [];
    let decision = Decision.Approve;

    // Hard Falls
    if (foir > 65) {
        decision = Decision.Decline;
        reasons.push('FOIR potentially exceeds 65% limit.');
    }

    // Tier 4 Rules check removed to allow Cohort Matrix to decide (e.g., A1-B4 might be Amber)
    // Hard fails like FOIR > 65 should still apply below or above.


    // Employment Stability
    const minTenure = (employmentType === EmploymentType.SalariedGovernment || employmentType === EmploymentType.SalariedPSU) ? 1 : 2;

    if (employmentYears < minTenure) {
        // If we haven't outright declined yet, we might Refer
        if (decision === Decision.Approve) {
            decision = Decision.Refer;
            reasons.push(`Employment tenure (${employmentYears} yrs) is below preferred threshold of ${minTenure} yrs.`);
        } else if (decision === Decision.Decline) {
            reasons.push(`Employment tenure (${employmentYears} yrs) is too low.`);
        }
    }

    // Tier 3 is usually a Refer or High Pricing Approve. Let's say Refer for safety in this engine.
    if (decision === Decision.Approve && riskTier === RiskTier.Tier3) {
        decision = Decision.Refer;
        reasons.push('Risk profile is Sub-Prime (Tier 3), manual review recommended.');
    }

    return { decision, reasons };
}

export function determineBureauBand(score: number): BureauScoreBand {
    if (score >= 750) return BureauScoreBand.B1;
    if (score >= 700) return BureauScoreBand.B2;
    if (score >= 650) return BureauScoreBand.B3;
    if (score >= 600) return BureauScoreBand.B4;
    if (score > 0) return BureauScoreBand.B5;
    return BureauScoreBand.NTC; // 0 or -1 usually
}

export function determineCohort(
    appBand: ApplicationScoreBand,
    bureauBand: BureauScoreBand
): Cohort {
    // Matrix Implementation
    // Rows: A1-A5
    // Cols: B1-B5, NTC

    // A1 Row: Green for B1/B2, Amber for B3/B4/NTC, Red for B5
    if (appBand === ApplicationScoreBand.A1) {
        if (bureauBand === BureauScoreBand.B1 || bureauBand === BureauScoreBand.B2) return Cohort.Green;
        if (bureauBand === BureauScoreBand.B5) return Cohort.Red;
        return Cohort.Amber;
    }

    // A2 Row: Green for B1, Amber for B2-B4/NTC, Red for B5
    if (appBand === ApplicationScoreBand.A2) {
        if (bureauBand === BureauScoreBand.B1) return Cohort.Green;
        if (bureauBand === BureauScoreBand.B5) return Cohort.Red;
        return Cohort.Amber;
    }

    // A3 Row: Amber for B1-B3, Red for B4/B5/NTC
    if (appBand === ApplicationScoreBand.A3) {
        if (bureauBand === BureauScoreBand.B1 || bureauBand === BureauScoreBand.B2 || bureauBand === BureauScoreBand.B3) return Cohort.Amber;
        return Cohort.Red;
    }

    // A4 Row: Amber for B1-B2, Red for others
    if (appBand === ApplicationScoreBand.A4) {
        if (bureauBand === BureauScoreBand.B1 || bureauBand === BureauScoreBand.B2) return Cohort.Amber;
        return Cohort.Red;
    }

    // A5 Row: All Red
    return Cohort.Red;
}
