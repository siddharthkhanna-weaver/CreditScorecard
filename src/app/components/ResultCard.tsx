import React from 'react';
import { ScorecardResult, Decision, RiskTier } from '../../lib/engine/types';
import { determineBureauBand } from '../../lib/engine/rules';
import CrosstabMatrix from './CrosstabMatrix';

interface ResultCardProps {
    result: ScorecardResult | null;
    creditScore: number;
}

export default function ResultCard({ result, creditScore }: ResultCardProps) {
    if (!result) {
        return (
            <div style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                borderRadius: '1.5rem',
                padding: '3rem',
                textAlign: 'center',
                border: '2px dashed #cbd5e1',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '1rem',
                    background: 'linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p style={{ color: '#64748b', fontSize: '1rem', fontWeight: 500 }}>
                    Enter applicant details to generate scorecard
                </p>
            </div>
        );
    }

    const getDecisionStyles = (d: Decision): { bg: string; color: string; glow: string } => {
        switch (d) {
            case Decision.Approve: return {
                bg: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
                color: '#ffffff',
                glow: '0 10px 40px rgba(16, 185, 129, 0.4)'
            };
            case Decision.Refer: return {
                bg: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
                color: '#ffffff',
                glow: '0 10px 40px rgba(245, 158, 11, 0.4)'
            };
            case Decision.Decline: return {
                bg: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
                color: '#ffffff',
                glow: '0 10px 40px rgba(239, 68, 68, 0.4)'
            };
        }
    };

    const getTierLabel = (t: RiskTier): { label: string; color: string } => {
        switch (t) {
            case RiskTier.Tier1: return { label: 'Prime', color: '#10B981' };
            case RiskTier.Tier2: return { label: 'Near Prime', color: '#3B82F6' };
            case RiskTier.Tier3: return { label: 'Sub Prime', color: '#F59E0B' };
            case RiskTier.Tier4: return { label: 'High Risk', color: '#EF4444' };
        }
    };

    const decisionStyles = getDecisionStyles(result.decision);
    const tierInfo = getTierLabel(result.riskTier);
    const bureauBand = determineBureauBand(creditScore);

    const sectionStyle: React.CSSProperties = {
        marginBottom: '1.5rem',
        padding: '1.25rem',
        background: '#f8fafc',
        borderRadius: '1rem',
        border: '1px solid #e2e8f0',
    };

    const metricRowStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 0',
        borderBottom: '1px solid #e2e8f0',
    };

    const metricLabelStyle: React.CSSProperties = {
        fontSize: '0.875rem',
        color: '#64748b',
        fontWeight: 500,
    };

    const metricValueStyle: React.CSSProperties = {
        fontSize: '0.9375rem',
        color: '#0f172a',
        fontWeight: 700,
    };

    return (
        <div style={{
            background: '#ffffff',
            borderRadius: '1.5rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.04)',
        }}>
            {/* Decision Header */}
            <div style={{
                background: decisionStyles.bg,
                padding: '2rem',
                textAlign: 'center',
                boxShadow: decisionStyles.glow,
            }}>
                <div style={{
                    display: 'inline-block',
                    padding: '0.25rem 1rem',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '2rem',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.75rem',
                }}>
                    Decision
                </div>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: decisionStyles.color,
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.02em',
                }}>
                    {result.decision}
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(255,255,255,0.25)',
                        borderRadius: '0.5rem',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: '#fff',
                    }}>
                        {result.applicationScore.band}
                    </span>
                    <span style={{
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(255,255,255,0.25)',
                        borderRadius: '0.5rem',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: '#fff',
                    }}>
                        {result.cohort}
                    </span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem' }}>
                    {tierInfo.label} · Score {result.applicationScore.totalScore}/100
                </p>
            </div>

            {/* Body */}
            <div style={{ padding: '1.5rem' }}>
                {/* Crosstab Matrix */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <CrosstabMatrix appBand={result.applicationScore.band} bureauBand={bureauBand} />
                </div>

                {/* Score Breakdown */}
                <div style={sectionStyle}>
                    <h3 style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Score Breakdown
                    </h3>
                    <div style={metricRowStyle}>
                        <span style={metricLabelStyle}>FOIR Score</span>
                        <span style={metricValueStyle}>{result.applicationScore.breakdown.foirScore}/40</span>
                    </div>
                    <div style={metricRowStyle}>
                        <span style={metricLabelStyle}>LTV Score</span>
                        <span style={metricValueStyle}>{result.applicationScore.breakdown.ltvScore}/30</span>
                    </div>
                    <div style={metricRowStyle}>
                        <span style={metricLabelStyle}>Tenure Score</span>
                        <span style={metricValueStyle}>{result.applicationScore.breakdown.tenureScore}/20</span>
                    </div>
                    <div style={{ ...metricRowStyle, borderBottom: 'none' }}>
                        <span style={metricLabelStyle}>Stability Score</span>
                        <span style={metricValueStyle}>{result.applicationScore.breakdown.stabilityScore}/10</span>
                    </div>
                </div>

                {/* Approved Terms */}
                <div style={sectionStyle}>
                    <h3 style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Approved Terms
                    </h3>
                    <div style={metricRowStyle}>
                        <span style={metricLabelStyle}>Interest Rate</span>
                        <span style={{ ...metricValueStyle, color: '#6366f1' }}>{result.recommendedRate}%</span>
                    </div>
                    <div style={{ ...metricRowStyle, borderBottom: 'none' }}>
                        <span style={metricLabelStyle}>Max Eligible Loan</span>
                        <span style={{ ...metricValueStyle, color: '#10b981' }}>₹{result.maxEligibleLoanAmount.toLocaleString()}</span>
                    </div>
                </div>

                {/* Risk Metrics */}
                <div style={sectionStyle}>
                    <h3 style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Risk Metrics
                    </h3>
                    <div style={metricRowStyle}>
                        <span style={metricLabelStyle}>LTV Ratio</span>
                        <span style={{ ...metricValueStyle, color: result.metrics.ltv > 80 ? '#ef4444' : '#0f172a' }}>
                            {result.metrics.ltv}%
                        </span>
                    </div>
                    <div style={metricRowStyle}>
                        <span style={metricLabelStyle}>FOIR</span>
                        <span style={{ ...metricValueStyle, color: result.metrics.foir > 50 ? '#f59e0b' : '#0f172a' }}>
                            {result.metrics.foir}%
                        </span>
                    </div>
                    <div style={{ ...metricRowStyle, borderBottom: 'none' }}>
                        <span style={metricLabelStyle}>DTI (Back-End)</span>
                        <span style={metricValueStyle}>{result.metrics.dti}%</span>
                    </div>
                </div>

                {/* Decision Factors */}
                {result.messages.length > 0 && (
                    <div style={{
                        background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
                        border: '1px solid #fecaca',
                        borderRadius: '1rem',
                        padding: '1.25rem',
                    }}>
                        <h4 style={{ color: '#b91c1c', marginBottom: '0.75rem', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Decision Factors
                        </h4>
                        <ul style={{ paddingLeft: '1.25rem', color: '#dc2626', fontSize: '0.875rem', lineHeight: 1.6 }}>
                            {result.messages.map((msg, i) => (
                                <li key={i} style={{ marginBottom: '0.25rem' }}>{msg}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
