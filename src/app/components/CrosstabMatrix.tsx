import React from 'react';
import { ApplicationScoreBand, BureauScoreBand, Cohort } from '../../lib/engine/types';
import { determineCohort } from '../../lib/engine/rules';

interface CrosstabMatrixProps {
    appBand: ApplicationScoreBand;
    bureauBand: BureauScoreBand;
}

export default function CrosstabMatrix({ appBand, bureauBand }: CrosstabMatrixProps) {
    // Define Rows and Cols
    const appBands = [
        ApplicationScoreBand.A1,
        ApplicationScoreBand.A2,
        ApplicationScoreBand.A3,
        ApplicationScoreBand.A4,
        ApplicationScoreBand.A5
    ];

    const bureauBands = [
        BureauScoreBand.B1,
        BureauScoreBand.B2,
        BureauScoreBand.B3,
        BureauScoreBand.B4,
        BureauScoreBand.B5,
        BureauScoreBand.NTC
    ];

    // Helper to get short labels
    const getAppLabel = (b: ApplicationScoreBand) => b.split(' ')[0];
    const getBureauLabel = (b: BureauScoreBand) => b.split(' ')[0];

    const getCellColor = (cohort: Cohort) => {
        switch (cohort) {
            case Cohort.Green: return 'rgba(16, 185, 129, 0.2)'; // Light Green
            case Cohort.Amber: return 'rgba(245, 158, 11, 0.2)'; // Light Amber
            case Cohort.Red: return 'rgba(225, 29, 72, 0.2)';   // Light Red
        }
    };

    const getCellBorderColor = (cohort: Cohort) => {
        switch (cohort) {
            case Cohort.Green: return '#10B981';
            case Cohort.Amber: return '#F59E0B';
            case Cohort.Red: return '#E11D48';
        }
    };

    return (
        <div style={{ padding: '1rem', border: '1px solid #E2E8F0', borderRadius: '0.75rem', backgroundColor: 'white' }}>
            <h4 style={{ marginBottom: '1rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600, color: '#64748B' }}>
                RISK MATRIX POSITION
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '40px repeat(6, 1fr)', gap: '4px', fontSize: '0.75rem' }}>
                {/* Header Row */}
                <div></div>
                {bureauBands.map(b => (
                    <div key={b} style={{ textAlign: 'center', fontWeight: 600, color: '#64748B' }}>
                        {getBureauLabel(b)}
                    </div>
                ))}

                {/* Matrix Rows */}
                {appBands.map(a => (
                    <React.Fragment key={a}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#64748B' }}>
                            {getAppLabel(a)}
                        </div>
                        {bureauBands.map(b => {
                            const cohort = determineCohort(a, b);
                            const isActive = a === appBand && b === bureauBand;

                            return (
                                <div
                                    key={`${a}-${b}`}
                                    style={{
                                        backgroundColor: getCellColor(cohort),
                                        border: isActive ? '2px solid #1E293B' : `1px solid ${getCellBorderColor(cohort)}`,
                                        borderRadius: '4px',
                                        height: '24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: isActive ? 800 : 400,
                                        opacity: isActive ? 1 : 0.6,
                                        transform: isActive ? 'scale(1.1)' : 'none',
                                        boxShadow: isActive ? '0 2px 4px rgba(0,0,0,0.2)' : 'none',
                                        position: 'relative',
                                        zIndex: isActive ? 10 : 1
                                    }}
                                    title={`${getAppLabel(a)} + ${getBureauLabel(b)} = ${cohort}`}
                                >
                                    {isActive && (
                                        <div style={{
                                            width: '6px',
                                            height: '6px',
                                            backgroundColor: '#1E293B',
                                            borderRadius: '50%'
                                        }} />
                                    )}
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>

            <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.75rem', color: '#64748B' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#10B981', borderRadius: '50%' }}></div> Green
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#F59E0B', borderRadius: '50%' }}></div> Amber
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#E11D48', borderRadius: '50%' }}></div> Red
                </div>
            </div>
        </div>
    );
}
