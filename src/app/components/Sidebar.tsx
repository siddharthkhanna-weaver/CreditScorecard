import React from 'react';

interface SidebarProps {
    activeTab: 'scorecard' | 'documentation' | 'income-imputation';
    setActiveTab: (tab: 'scorecard' | 'documentation' | 'income-imputation') => void;
    activeDoc: string | null;
    setActiveDoc: (doc: string | null) => void;
    docTitles: Record<string, string>;
    sidebarWidth?: string;
}

export default function Sidebar({
    activeTab,
    setActiveTab,
    activeDoc,
    setActiveDoc,
    docTitles,
    sidebarWidth = '260px',
}: SidebarProps) {

    const sidebarStyle: React.CSSProperties = {
        width: sidebarWidth,
        background: 'linear-gradient(180deg, #0f172a 0%, #111827 100%)',
        borderRight: '1px solid #1e293b',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        overflowY: 'auto',
        zIndex: 10,
        boxShadow: '10px 0 30px rgba(0,0,0,0.3)',
    };


    const logoContainerStyle: React.CSSProperties = {
        padding: '1.5rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        borderBottomLeftRadius: '1.25rem',
        borderBottomRightRadius: '1.25rem',
        position: 'relative',
        zIndex: 11,
    };

    const logoImageStyle: React.CSSProperties = {
        maxWidth: '100%',
        maxHeight: '48px',
        height: 'auto',
        display: 'block',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))',
    };

    const navContainerStyle: React.CSSProperties = {
        flex: 1,
        padding: '0 1rem',
    };

    const sectionTitleStyle: React.CSSProperties = {
        padding: '0 1rem',
        fontSize: '0.7rem',
        fontWeight: 800,
        color: '#475569',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        marginBottom: '1rem',
        marginTop: '2rem',
        opacity: 0.8,
    };

    const navButtonStyle = (isActive: boolean): React.CSSProperties => ({
        width: '100%',
        textAlign: 'left',
        padding: '0.875rem 1rem',
        borderRadius: '1rem',
        fontSize: '0.9rem',
        fontWeight: 600,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid ' + (isActive ? 'rgba(99, 102, 241, 0.2)' : 'transparent'),
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.875rem',
        marginBottom: '0.5rem',
        backgroundColor: isActive ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
        color: isActive ? '#a5b4fc' : '#94a3b8',
        boxShadow: isActive ? '0 4px 12px rgba(99, 102, 241, 0.15)' : 'none',
        position: 'relative',
        overflow: 'hidden',
    });

    const activeIndicatorStyle: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        top: '25%',
        height: '50%',
        width: '4px',
        backgroundColor: '#6366f1',
        borderRadius: '0 4px 4px 0',
        boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
    };

    const subNavContainerStyle: React.CSSProperties = {
        marginLeft: '2rem',
        paddingLeft: '1rem',
        borderLeft: '1.5px solid #1e293b',
        marginTop: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
    };

    const subNavButtonStyle = (isActive: boolean): React.CSSProperties => ({
        width: '100%',
        textAlign: 'left',
        padding: '0.625rem 0.875rem',
        borderRadius: '0.75rem',
        fontSize: '0.85rem',
        transition: 'all 0.2s ease',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
        color: isActive ? '#f8fafc' : '#64748b',
        fontWeight: isActive ? 600 : 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    });

    const footerStyle: React.CSSProperties = {
        padding: '1.5rem 1rem',
        borderTop: '1px solid #1e293b',
        background: 'rgba(2, 6, 23, 0.5)',
    };

    const profileCardStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.875rem',
        borderRadius: '1.25rem',
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
        border: '1.5px solid rgba(255, 255, 255, 0.03)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    };

    const avatarStyle: React.CSSProperties = {
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '0.75rem',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.875rem',
        fontWeight: 700,
        color: '#fff',
        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
    };

    const profileInfoStyle: React.CSSProperties = {
        flex: 1,
        minWidth: 0,
    };

    return (
        <div style={sidebarStyle}>
            <div style={logoContainerStyle}>
                <img src="/logo.png" alt="Logo" style={logoImageStyle} />
            </div>

            <div style={navContainerStyle}>
                <h3 style={sectionTitleStyle}>Platform</h3>
                <nav>
                    <button
                        onClick={() => setActiveTab('scorecard')}
                        style={navButtonStyle(activeTab === 'scorecard')}
                    >
                        {activeTab === 'scorecard' && <span style={activeIndicatorStyle} />}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="21" x2="9" y2="9" />
                        </svg>
                        Applicant Scorecard
                    </button>

                    <button
                        onClick={() => setActiveTab('income-imputation')}
                        style={navButtonStyle(activeTab === 'income-imputation')}
                    >
                        {activeTab === 'income-imputation' && <span style={activeIndicatorStyle} />}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        Income Imputation
                    </button>
                </nav>

                <h3 style={sectionTitleStyle}>Research & Library</h3>
                <nav>
                    <button
                        onClick={() => { setActiveTab('documentation'); setActiveDoc(null); }}
                        style={navButtonStyle(activeTab === 'documentation' && !activeDoc)}
                    >
                        {activeTab === 'documentation' && !activeDoc && <span style={activeIndicatorStyle} />}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                        Documentation
                    </button>

                    {activeTab === 'documentation' && (
                        <div style={subNavContainerStyle}>
                            {Object.entries(docTitles).map(([filename, title]) => (
                                <button
                                    key={filename}
                                    onClick={() => setActiveDoc(filename)}
                                    style={subNavButtonStyle(activeDoc === filename)}
                                    title={title}
                                >
                                    {title}
                                </button>
                            ))}
                        </div>
                    )}
                </nav>
            </div>

            <div style={footerStyle}>
                <div style={profileCardStyle}>
                    <div style={avatarStyle}>SK</div>
                    <div style={profileInfoStyle}>
                        <p style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.8125rem', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            Siddharth Khanna
                        </p>
                        <p style={{ color: '#64748b', fontSize: '0.6875rem', margin: 0, fontWeight: 500 }}>
                            Lead Underwriter
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                button:hover {
                    background-color: rgba(255, 255, 255, 0.05) !important;
                    color: #f1f5f9 !important;
                }
                button:active {
                    transform: scale(0.98);
                }
            `}</style>
        </div>
    );
}
