'use client';

import React, { useState, useCallback } from 'react';
import { estimateIncomeBureauOnly, ImputationInputs, ImputationResult } from '@/lib/engine/incomeImputation';

export default function IncomeImputationTab() {
    const [method, setMethod] = useState<'bureau' | 'combined'>('bureau');
    const [file, setFile] = useState<File | null>(null);
    const [isParsing, setIsParsing] = useState(false);
    const [parseError, setParseError] = useState<string | null>(null);
    const [extractedData, setExtractedData] = useState<any>(null);
    const [manualInputs, setManualInputs] = useState<ImputationInputs>({
        totalEMI: 0,
        creditScore: 0,
        assetClass: 'NONE',
        locationTier: 'TIER2',
        isCreditCardHighlyUtilized: false
    });
    const [result, setResult] = useState<ImputationResult | null>(null);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (!uploadedFile) return;
        setFile(uploadedFile);
        setIsParsing(true);
        setParseError(null);

        console.log('Uploading file:', uploadedFile.name);
        const formData = new FormData();
        formData.append('file', uploadedFile);

        try {
            const response = await fetch('/api/parse-bureau', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to parse PDF');
            }

            const data = await response.json();
            console.log('Parse response:', data);

            if (data.extracted) {
                setExtractedData(data.extracted);
                setManualInputs(prev => ({
                    ...prev,
                    totalEMI: data.extracted.totalEMI || prev.totalEMI,
                    creditScore: data.extracted.creditScore || prev.creditScore,
                    locationTier: data.extracted.locationTier || prev.locationTier,
                    assetClass: data.extracted.assetClass || prev.assetClass,
                    isCreditCardHighlyUtilized: data.extracted.isCreditCardHighlyUtilized || false
                }));
            } else {
                setParseError('Could not extract data from PDF. Please enter details manually.');
            }
        } catch (error: any) {
            console.error('Error parsing PDF:', error);
            setParseError(error.message || 'Error parsing PDF');
        } finally {
            setIsParsing(false);
        }
    };

    const calculate = () => {
        const res = estimateIncomeBureauOnly(manualInputs);
        setResult(res);
    };

    // Styles
    const containerStyle: React.CSSProperties = {
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const cardStyle: React.CSSProperties = {
        backgroundColor: '#ffffff',
        borderRadius: '1.5rem',
        padding: '2rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        border: '1px solid #e2e8f0',
    };

    const headerStyle: React.CSSProperties = {
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const toggleContainerStyle: React.CSSProperties = {
        display: 'flex',
        backgroundColor: '#f1f5f9',
        borderRadius: '0.75rem',
        padding: '0.25rem',
        gap: '0.25rem'
    };

    const toggleButtonStyle = (active: boolean): React.CSSProperties => ({
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        border: 'none',
        cursor: 'pointer',
        fontSize: '0.875rem',
        fontWeight: 600,
        backgroundColor: active ? '#ffffff' : 'transparent',
        color: active ? '#1e293b' : '#64748b',
        boxShadow: active ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.2s ease'
    });

    const inputGroupStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
    };

    const labelStyle: React.CSSProperties = {
        display: 'block',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#475569',
        marginBottom: '0.5rem'
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.75rem 1rem',
        borderRadius: '0.75rem',
        border: '1px solid #cbd5e1',
        fontSize: '1rem',
        backgroundColor: '#f8fafc'
    };

    const uploadBoxStyle: React.CSSProperties = {
        border: '2px dashed #cbd5e1',
        borderRadius: '1rem',
        padding: '2.5rem',
        textAlign: 'center',
        marginBottom: '2rem',
        backgroundColor: '#f8fafc',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
    };

    const resultCardStyle: React.CSSProperties = {
        marginTop: '2rem',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderRadius: '1.25rem',
        padding: '2rem',
        color: '#ffffff'
    };

    const badgeStyle = (type: 'success' | 'warning'): React.CSSProperties => ({
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        backgroundColor: type === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)',
        color: type === 'success' ? '#4ade80' : '#facc15',
        marginRight: '0.5rem'
    });

    return (
        <div style={containerStyle}>
            <div style={headerStyle} className="tab-header">
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Income Imputation</h1>
                    <p style={{ color: '#64748b', marginTop: '0.25rem' }}>Estimate applicant income using bureau and banking surrogates</p>
                </div>
                <div style={toggleContainerStyle}>
                    <button
                        style={toggleButtonStyle(method === 'bureau')}
                        onClick={() => setMethod('bureau')}
                    > Bureau Only </button>
                    <button
                        style={toggleButtonStyle(method === 'combined')}
                        onClick={() => setMethod('combined')}
                    > Bureau + Bank </button>
                </div>
            </div>

            <div style={cardStyle}>
                {method === 'bureau' ? (
                    <>
                        <div
                            style={uploadBoxStyle}
                            onClick={() => document.getElementById('bureau-upload')?.click()}
                            onMouseOver={(e) => e.currentTarget.style.borderColor = '#6366f1'}
                            onMouseOut={(e) => e.currentTarget.style.borderColor = '#cbd5e1'}
                        >
                            <input
                                type="file"
                                id="bureau-upload"
                                style={{ display: 'none' }}
                                accept=".pdf"
                                onChange={handleFileUpload}
                            />
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                            <h3 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>{file ? file.name : 'Upload Bureau Report'}</h3>
                            <p style={{ margin: 0, color: parseError ? '#ef4444' : '#64748b', fontSize: '0.875rem' }}>
                                {isParsing ? 'Parsing PDF contents...' : parseError || 'PDF files only. Max 10MB.'}
                            </p>
                        </div>

                        <div style={inputGroupStyle}>
                            <div>
                                <label style={labelStyle}>Total Monthly EMI (Bureau)</label>
                                <input
                                    type="number"
                                    value={manualInputs.totalEMI}
                                    onChange={(e) => setManualInputs({ ...manualInputs, totalEMI: parseFloat(e.target.value) || 0 })}
                                    style={inputStyle}
                                    placeholder="₹ 0.00"
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Credit Score (CIBIL)</label>
                                <input
                                    type="number"
                                    value={manualInputs.creditScore}
                                    onChange={(e) => setManualInputs({ ...manualInputs, creditScore: parseInt(e.target.value) || 0 })}
                                    style={inputStyle}
                                    placeholder="300 - 900"
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Highest Asset Class</label>
                                <select
                                    value={manualInputs.assetClass}
                                    onChange={(e) => setManualInputs({ ...manualInputs, assetClass: e.target.value as any })}
                                    style={inputStyle}
                                >
                                    <option value="HL_PREMIUM">Home Loan (&gt;50L)</option>
                                    <option value="HL_STANDARD">Home Loan (20-50L)</option>
                                    <option value="CAR_LUXURY">Car Loan (&gt;10L)</option>
                                    <option value="CAR_STD">Car Loan (&lt;10L)</option>
                                    <option value="TWOWHEELER">Two Wheeler / CD</option>
                                    <option value="NONE">Unsecured Only</option>
                                </select>
                            </div>
                            <div>
                                <label style={labelStyle}>Location Tier</label>
                                <select
                                    value={manualInputs.locationTier}
                                    onChange={(e) => setManualInputs({ ...manualInputs, locationTier: e.target.value as any })}
                                    style={inputStyle}
                                >
                                    <option value="METRO">Metro (Mumbai, Delhi, etc.)</option>
                                    <option value="TIER1">Tier 1 Cities</option>
                                    <option value="TIER2">Tier 2/3 Cities</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <input
                                type="checkbox"
                                id="util-check"
                                checked={manualInputs.isCreditCardHighlyUtilized}
                                onChange={(e) => setManualInputs({ ...manualInputs, isCreditCardHighlyUtilized: e.target.checked })}
                                style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer' }}
                            />
                            <label htmlFor="util-check" style={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500, cursor: 'pointer' }}>
                                Credit Card Utilization &gt; 90% (Apply 20% Haircut)
                            </label>
                        </div>

                        <button
                            onClick={calculate}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '1rem',
                                backgroundColor: '#6366f1',
                                color: '#ffffff',
                                border: 'none',
                                fontSize: '1rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6366f1'}
                        >
                            Calculate Imputed Income
                        </button>
                    </>
                ) : (
                    <div style={{ textAlign: 'center', padding: '3rem' }}>
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem', opacity: 0.5 }}>
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        <h2 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>Combined Method Coming Soon</h2>
                        <p style={{ color: '#64748b' }}>Bank statement triangulation requires Account Aggregator (AA) integration.</p>
                    </div>
                )}
            </div>

            {result && (
                <div style={resultCardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }} className="income-result-header">
                        <div>
                            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Final Estimated Monthly Income
                            </p>
                            <h2 style={{ fontSize: '3rem', fontWeight: 800, margin: '0.5rem 0', color: '#ffffff' }} className="income-value">
                                ₹ {result.finalEstimatedIncome.toLocaleString('en-IN', { minimumFractionDigits: 0 })}
                            </h2>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={badgeStyle(result.assumedFOIR <= 0.4 ? 'success' : 'warning')}>
                                {result.assumedFOIR * 100}% Assumed FOIR
                            </div>
                            {result.haircutApplied && (
                                <div style={{ ...badgeStyle('warning'), marginTop: '0.5rem' }}>
                                    20% Haircut Applied
                                </div>
                            )}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                        <div>
                            <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Formula Result</span>
                            <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0.25rem 0' }}>₹ {result.baseEstimatedIncome.toLocaleString('en-IN')}</p>
                        </div>
                        <div>
                            <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Applied Asset Cap</span>
                            <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0.25rem 0' }}>₹ {result.appliedCap.toLocaleString('en-IN')}</p>
                        </div>
                        <div>
                            <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Location Floor</span>
                            <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0.25rem 0' }}>₹ {result.appliedFloor.toLocaleString('en-IN')}</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '1rem', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ margin: '0 0 0.75rem 0', color: '#cbd5e1', fontSize: '0.875rem' }}>Methodology Note</h4>
                        <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.75rem', lineHeight: 1.6 }}>
                            This income is derived using the "Reverse FOIR" model. It assumes that your current bureau obligations (₹ {manualInputs.totalEMI})
                            represent {result.assumedFOIR * 100}% of your monthly earnings based on your credit score of {manualInputs.creditScore}.
                            Caps are applied to prevent over-leveraging based on your asset profile ({manualInputs.assetClass}).
                        </p>
                    </div>
                </div>
            )}
            <style jsx>{`
                @media (max-width: 768px) {
                    .income-result-header {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 1rem;
                    }
                    .income-value {
                        font-size: 2rem !important;
                    }
                    .tab-header {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
}
