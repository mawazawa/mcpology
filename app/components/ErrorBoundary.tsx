/*
╔══════════════════════════════════════════════════════════════╗
║                    ERROR BOUNDARY                            ║
║              Graceful error handling for MCPology            ║
╚══════════════════════════════════════════════════════════════╝
*/

'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('MCPology Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          border: '2px solid var(--danger)',
          borderRadius: 'var(--radius)',
          margin: '2rem auto',
          maxWidth: '600px'
        }}>
          <h2 style={{ color: 'var(--danger)' }}>🚨 Oops! Something went wrong</h2>
          <p>The MCP gremlins struck again. Try refreshing the page.</p>
          <details style={{ marginTop: '1rem', textAlign: 'left' }}>
            <summary style={{ cursor: 'pointer' }}>Error details</summary>
            <pre style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
              {this.state.error?.toString()}
            </pre>
          </details>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: 'var(--accent)',
              color: 'var(--bg)',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}