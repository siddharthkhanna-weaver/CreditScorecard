import React from 'react';
import { EmploymentType } from '../../lib/engine/types';

interface FormData {
    age: number;
    creditScore: number;
    employmentType: EmploymentType;
    employmentTenureYears: number;
    residenceStabilityYears: number;
    grossMonthlyIncome: number;
    otherMonthlyIncome: number;
    existingMonthlyObligations: number;
    loanAmountRequest: number;
    loanTenureMonths: number;
    propertyValue: number;
}

interface ScorecardFormProps {
    data: FormData;
    onChange: (data: FormData) => void;
}

export default function ScorecardForm({ data, onChange }: ScorecardFormProps) {
    const handleChange = (field: keyof FormData, value: string | number) => {
        if (field === 'employmentType') {
            onChange({ ...data, [field]: value as EmploymentType });
            return;
        }
        const numVal = typeof value === 'string' ? (value === '' ? 0 : parseFloat(value)) : value;
        onChange({ ...data, [field]: numVal });
    };

    const sectionStyle: React.CSSProperties = {
        marginBottom: '2rem',
    };

    const sectionHeaderStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1.25rem',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid #e2e8f0',
    };

    const sectionIconStyle: React.CSSProperties = {
        width: '36px',
        height: '36px',
        borderRadius: '0.625rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
    };

    const sectionTitleStyle: React.CSSProperties = {
        fontSize: '1rem',
        fontWeight: 700,
        color: '#0f172a',
        letterSpacing: '-0.01em',
    };

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.25rem',
    };

    const inputGroupStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#64748b',
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.875rem 1rem',
        borderRadius: '0.75rem',
        border: '1.5px solid #e2e8f0',
        backgroundColor: '#fff',
        fontSize: '0.9375rem',
        color: '#0f172a',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        outline: 'none',
    };

    const selectStyle: React.CSSProperties = {
        ...inputStyle,
        cursor: 'pointer',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 1rem center',
        paddingRight: '2.5rem',
    };

    return (
        <div>
            {/* Personal & Employment Section */}
            <div style={sectionStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={{ ...sectionIconStyle, background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>
                    <h3 style={sectionTitleStyle}>Personal & Employment</h3>
                </div>
                <div style={gridStyle}>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Age</label>
                        <input
                            type="number"
                            value={data.age || ''}
                            onChange={(e) => handleChange('age', e.target.value)}
                            style={inputStyle}
                            placeholder="Enter age"
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Credit Score (300-900)</label>
                        <input
                            type="number"
                            value={data.creditScore || ''}
                            onChange={(e) => handleChange('creditScore', e.target.value)}
                            min="300" max="900"
                            style={inputStyle}
                            placeholder="CIBIL Score"
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Employment Type</label>
                        <select
                            value={data.employmentType}
                            onChange={(e) => handleChange('employmentType', e.target.value as EmploymentType)}
                            style={selectStyle}
                        >
                            {Object.values(EmploymentType).map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Employment Tenure (Years)</label>
                        <input
                            type="number"
                            value={data.employmentTenureYears || ''}
                            onChange={(e) => handleChange('employmentTenureYears', e.target.value)}
                            style={inputStyle}
                            placeholder="Years"
                        />
                    </div>
                </div>
            </div>

            {/* Financial Profile Section */}
            <div style={sectionStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={{ ...sectionIconStyle, background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    </div>
                    <h3 style={sectionTitleStyle}>Financial Profile</h3>
                </div>
                <div style={gridStyle}>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Gross Monthly Income (₹)</label>
                        <input
                            type="number"
                            value={data.grossMonthlyIncome || ''}
                            onChange={(e) => handleChange('grossMonthlyIncome', e.target.value)}
                            style={inputStyle}
                            placeholder="Monthly income"
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Other Monthly Income (₹)</label>
                        <input
                            type="number"
                            value={data.otherMonthlyIncome || ''}
                            onChange={(e) => handleChange('otherMonthlyIncome', e.target.value)}
                            style={inputStyle}
                            placeholder="Rental, etc."
                        />
                    </div>
                    <div style={{ ...inputGroupStyle, gridColumn: 'span 2' }}>
                        <label style={labelStyle}>Existing Monthly EMIs (₹)</label>
                        <input
                            type="number"
                            value={data.existingMonthlyObligations || ''}
                            onChange={(e) => handleChange('existingMonthlyObligations', e.target.value)}
                            style={inputStyle}
                            placeholder="Car loan, credit card, etc."
                        />
                    </div>
                </div>
            </div>

            {/* Loan Requirement Section */}
            <div style={{ ...sectionStyle, marginBottom: 0 }}>
                <div style={sectionHeaderStyle}>
                    <div style={{ ...sectionIconStyle, background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9,22 9,12 15,12 15,22" />
                        </svg>
                    </div>
                    <h3 style={sectionTitleStyle}>Loan Requirement</h3>
                </div>
                <div style={gridStyle}>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Loan Amount (₹)</label>
                        <input
                            type="number"
                            value={data.loanAmountRequest || ''}
                            onChange={(e) => handleChange('loanAmountRequest', e.target.value)}
                            style={inputStyle}
                            placeholder="Requested amount"
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Property Value (₹)</label>
                        <input
                            type="number"
                            value={data.propertyValue || ''}
                            onChange={(e) => handleChange('propertyValue', e.target.value)}
                            style={inputStyle}
                            placeholder="Market value"
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Tenure (Months)</label>
                        <input
                            type="number"
                            value={data.loanTenureMonths || ''}
                            onChange={(e) => handleChange('loanTenureMonths', e.target.value)}
                            style={inputStyle}
                            placeholder="Loan duration"
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Residence Stability (Years)</label>
                        <input
                            type="number"
                            value={data.residenceStabilityYears || ''}
                            onChange={(e) => handleChange('residenceStabilityYears', e.target.value)}
                            style={inputStyle}
                            placeholder="At current address"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
