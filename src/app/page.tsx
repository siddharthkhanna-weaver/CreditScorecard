'use client';

import React, { useState, useEffect } from 'react';
import ScorecardForm from './components/ScorecardForm';
import ResultCard from './components/ResultCard';
import Sidebar from './components/Sidebar';
import DocumentationViewer from './components/DocumentationViewer';
import IncomeImputationTab from './components/IncomeImputationTab';
import { EmploymentType, ScorecardResult } from '../lib/engine/types';
import { evaluateApplicant } from '../lib/engine/scorecard';
import { docTitles } from '../lib/docsContent';

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

const INITIAL_DATA: FormData = {
  age: 35,
  creditScore: 750,
  employmentType: EmploymentType.SalariedPrivate,
  employmentTenureYears: 5,
  residenceStabilityYears: 3,
  grossMonthlyIncome: 100000,
  otherMonthlyIncome: 0,
  existingMonthlyObligations: 10000,
  loanAmountRequest: 5000000,
  propertyValue: 8000000,
  loanTenureMonths: 240
};

const EXPANDED_WIDTH = '260px';
const COLLAPSED_WIDTH = '80px';

export default function Home() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [result, setResult] = useState<ScorecardResult | null>(null);
  const [activeTab, setActiveTab] = useState<'scorecard' | 'documentation' | 'income-imputation'>('scorecard');
  const [activeDoc, setActiveDoc] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (
      formData.loanAmountRequest > 0 &&
      formData.propertyValue > 0 &&
      formData.grossMonthlyIncome > 0
    ) {
      const evaluation = evaluateApplicant(
        {
          age: formData.age,
          creditScore: formData.creditScore,
          employmentType: formData.employmentType,
          employmentTenureYears: formData.employmentTenureYears,
          residenceStabilityYears: formData.residenceStabilityYears
        },
        {
          grossMonthlyIncome: formData.grossMonthlyIncome,
          otherMonthlyIncome: formData.otherMonthlyIncome,
          existingMonthlyObligations: formData.existingMonthlyObligations
        },
        {
          loanAmountRequest: formData.loanAmountRequest,
          loanTenureMonths: formData.loanTenureMonths,
          propertyValue: formData.propertyValue,
          interestRate: 0
        }
      );
      setResult(evaluation);
    } else {
      setResult(null);
    }
  }, [formData]);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    minHeight: '100vh',
  };

  const currentSidebarWidth = isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH;

  const mainContentStyle: React.CSSProperties = {
    flex: 1,
    marginLeft: '0',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    minHeight: '100vh',
    position: 'relative',
    transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const scorecardMainStyle: React.CSSProperties = {
    padding: '2.5rem',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: '2.5rem',
    textAlign: 'center',
  };

  const headerTitleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
    letterSpacing: '-0.03em',
  };

  const headerSubtitleStyle: React.CSSProperties = {
    color: '#64748b',
    fontSize: '1.125rem',
    fontWeight: 500,
  };

  const gridStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'stretch',
  };

  const formCardStyle: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '1.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0,0,0,0.04)',
    overflow: 'hidden',
  };

  const formHeaderStyle: React.CSSProperties = {
    padding: '1.25rem 1.5rem',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const formTitleStyle: React.CSSProperties = {
    fontWeight: 700,
    color: '#0f172a',
    fontSize: '1rem',
    letterSpacing: '-0.01em',
  };

  const liveIndicatorStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#10b981',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const pulseStyle: React.CSSProperties = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#10b981',
    animation: 'pulse 2s ease-in-out infinite',
  };

  const formBodyStyle: React.CSSProperties = {
    padding: '1.75rem',
  };

  const resultStickyStyle: React.CSSProperties = {
    position: 'sticky',
    top: '2rem',
  };

  const docMainStyle: React.CSSProperties = {
    minHeight: '100vh',
    color: '#0f172a',
    padding: '2.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeDoc={activeDoc}
        setActiveDoc={setActiveDoc}
        docTitles={docTitles}
        sidebarWidth={currentSidebarWidth}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />


      <div style={{
        ...mainContentStyle,
        marginLeft: '0', // Default for mobile and desktop when adjusted
      }} className="main-content-wrapper">
        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 10 }} className="hidden-mobile">
          <img src="/logo.png" alt="Logo" style={{ maxHeight: '32px', width: 'auto' }} />
        </div>

        {activeTab === 'scorecard' ? (
          <main style={scorecardMainStyle}>
            <header style={headerStyle}>
              <h1 style={headerTitleStyle}>
                Credilens Scorecard
              </h1>
              <p style={headerSubtitleStyle}>
                Applicant Evaluation & Automated Underwriting System
              </p>
            </header>

            <div style={gridStyle} className="dashboard-grid">
              <div style={formCardStyle}>
                <div style={formHeaderStyle}>
                  <h2 style={formTitleStyle}>Application Details</h2>
                  <div style={liveIndicatorStyle}>
                    <span style={pulseStyle}></span>
                    Live Scoring
                  </div>
                </div>
                <div style={formBodyStyle}>
                  <ScorecardForm data={formData} onChange={setFormData} />
                </div>
              </div>
              <div style={resultStickyStyle} className="sticky-container">
                <ResultCard result={result} creditScore={formData.creditScore} />
              </div>
            </div>
          </main>
        ) : activeTab === 'documentation' ? (
          <main style={docMainStyle}>
            <DocumentationViewer docId={activeDoc} />
          </main>
        ) : (
          <main style={docMainStyle}>
            <IncomeImputationTab />
          </main>
        )}
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
        }

        .main-content-wrapper {
            margin-left: ${currentSidebarWidth} !important;
        }

        @media (max-width: 1024px) {
            .dashboard-grid {
                display: flex !important;
                flex-direction: column !important;
            }
            .sticky-container {
                position: static !important;
            }
        }

        @media (min-width: 1025px) {
            .dashboard-grid {
                display: grid !important;
                grid-template-columns: 1.4fr 1fr !important;
            }
        }
      `}</style>
    </div>
  );
}
