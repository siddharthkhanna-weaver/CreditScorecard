import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { docsContent, docTitles } from '@/lib/docsContent';

interface DocumentationViewerProps {
    docId: string | null;
}

export default function DocumentationViewer({ docId }: DocumentationViewerProps) {
    const containerStyle: React.CSSProperties = {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem 0',
    };

    const emptyStateStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        textAlign: 'center',
        padding: '3rem',
    };

    const iconBoxStyle: React.CSSProperties = {
        width: '4rem',
        height: '4rem',
        backgroundColor: '#1e293b',
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
    };

    const headerStyle: React.CSSProperties = {
        marginBottom: '2rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid #334155',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '1.875rem',
        fontWeight: 700,
        color: '#f1f5f9',
        marginBottom: '0.5rem',
    };

    const fileTagStyle: React.CSSProperties = {
        color: '#94a3b8',
        fontSize: '0.875rem',
        fontFamily: 'monospace',
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
        display: 'inline-block',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.25rem',
    };

    if (!docId || !docsContent[docId]) {
        return (
            <div style={emptyStateStyle}>
                <div style={iconBoxStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '2rem', width: '2rem', color: '#94a3b8' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>Research Documentation</h2>
                <p style={{ color: '#94a3b8', maxWidth: '28rem' }}>
                    Select a document from the sidebar to view the detailed research framework, methodologies, and reference tables used in this scorecard.
                </p>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>{docTitles[docId]}</h1>
                <p style={fileTagStyle}>{docId}</p>
            </div>
            <div className="markdown-body" style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {docsContent[docId]}
                </ReactMarkdown>
            </div>
            <style jsx global>{`
        .markdown-body h1,
        .markdown-body h2,
        .markdown-body h3,
        .markdown-body h4 {
          color: #f1f5f9;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .markdown-body h1 { font-size: 2rem; }
        .markdown-body h2 { font-size: 1.5rem; border-bottom: 1px solid #334155; padding-bottom: 0.5rem;}
        .markdown-body h3 { font-size: 1.25rem; color: #93c5fd; }
        .markdown-body p { margin-bottom: 1rem; }
        .markdown-body ul, .markdown-body ol { padding-left: 1.5rem; margin-bottom: 1rem; }
        .markdown-body li { margin-bottom: 0.5rem; }
        .markdown-body code {
          background-color: #1e293b;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          color: #7dd3fc;
        }
        .markdown-body pre {
          background-color: #0f172a;
          border: 1px solid #334155;
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          margin-bottom: 1rem;
        }
        .markdown-body pre code {
          background: transparent;
          padding: 0;
        }
        .markdown-body table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1rem;
          border: 1px solid #334155;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .markdown-body th {
          background-color: rgba(30, 41, 59, 0.5);
          color: #93c5fd;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
        }
        .markdown-body td {
          border-top: 1px solid #334155;
          padding: 0.75rem;
        }
        .markdown-body blockquote {
          border-left: 4px solid #3b82f6;
          background-color: rgba(59, 130, 246, 0.1);
          padding: 1rem;
          border-radius: 0 0.5rem 0.5rem 0;
          color: #bfdbfe;
          margin-bottom: 1rem;
        }
        .markdown-body a { color: #60a5fa; text-decoration: none; }
        .markdown-body a:hover { text-decoration: underline; }
        .markdown-body hr {
          border: none;
          border-top: 1px solid #334155;
          margin: 2rem 0;
        }
      `}</style>
        </div>
    );
}
