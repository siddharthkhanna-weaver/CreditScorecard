import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { docsContent, docTitles } from '@/lib/docsContent';

interface DocumentationViewerProps {
  docId: string | null;
}

export default function DocumentationViewer({ docId }: DocumentationViewerProps) {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0',
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
    backgroundColor: '#f1f5f9',
    borderRadius: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: '2.5rem',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
    letterSpacing: '-0.03em',
  };

  const fileTagStyle: React.CSSProperties = {
    color: '#64748b',
    fontSize: '0.875rem',
    fontWeight: 600,
    backgroundColor: '#f1f5f9',
    display: 'inline-block',
    padding: '0.375rem 0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #e2e8f0',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const cardStyle: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '1.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0,0,0,0.04)',
    padding: '3rem',
    minHeight: '600px',
  };

  if (!docId || !docsContent[docId]) {
    return (
      <div style={emptyStateStyle}>
        <div style={iconBoxStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '2rem', width: '2rem', color: '#6366f1' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Research Documentation</h2>
        <p style={{ color: '#64748b', maxWidth: '28rem', fontSize: '1.125rem' }}>
          Select a document from the sidebar to view the detailed research framework and methodologies.
        </p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>{docTitles[docId]}</h1>
        <p style={fileTagStyle}>Source: {docId}</p>
      </div>

      <div style={cardStyle}>
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {docsContent[docId]}
          </ReactMarkdown>
        </div>
      </div>

      <style jsx global>{`
        .markdown-body {
          color: #334155;
          line-height: 1.8;
          font-size: 1.125rem;
        }
        .markdown-body h1,
        .markdown-body h2,
        .markdown-body h3,
        .markdown-body h4 {
          color: #0f172a;
          font-weight: 800;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }
        .markdown-body h1 { font-size: 2.25rem; }
        .markdown-body h2 { 
          font-size: 1.75rem; 
          border-bottom: 2px solid #f1f5f9; 
          padding-bottom: 0.75rem;
          margin-top: 3rem;
        }
        .markdown-body h3 { font-size: 1.375rem; color: #4f46e5; }
        .markdown-body p { margin-bottom: 1.5rem; }
        .markdown-body ul, .markdown-body ol { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .markdown-body li { margin-bottom: 0.75rem; }
        .markdown-body code {
          background-color: #f1f5f9;
          padding: 0.2rem 0.4rem;
          border-radius: 0.375rem;
          font-size: 0.9em;
          color: #4f46e5;
          border: 1px solid #e2e8f0;
          font-weight: 600;
        }
        .markdown-body pre {
          background-color: #0f172a;
          border-radius: 1rem;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 2rem 0;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .markdown-body pre code {
          background: transparent;
          padding: 0;
          border: none;
          color: #f8fafc;
          font-weight: 400;
        }
        .markdown-body table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin: 2rem 0;
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        .markdown-body th {
          background-color: #f8fafc;
          color: #0f172a;
          padding: 1rem;
          text-align: left;
          font-weight: 700;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 2px solid #e2e8f0;
        }
        .markdown-body td {
          border-top: 1px solid #e2e8f0;
          padding: 1rem;
          color: #475569;
          font-size: 1rem;
        }
        .markdown-body tr:last-child td {
          border-bottom: none;
        }
        .markdown-body blockquote {
          border-left: 6px solid #6366f1;
          background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
          padding: 1.5rem 2rem;
          border-radius: 0 1rem 1rem 0;
          color: #4c1d95;
          margin: 2rem 0;
          font-style: italic;
          font-weight: 500;
        }
        .markdown-body a { 
          color: #4f46e5; 
          text-decoration: none; 
          font-weight: 600;
          border-bottom: 2px solid rgba(79, 70, 229, 0.1);
          transition: all 0.2s ease;
        }
        .markdown-body a:hover { 
          border-bottom-color: #4f46e5;
          background-color: rgba(79, 70, 229, 0.05);
        }
        .markdown-body hr {
          border: none;
          border-top: 2px solid #f1f5f9;
          margin: 3rem 0;
        }
      `}</style>
    </div>
  );
}
