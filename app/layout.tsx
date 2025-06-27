/*
╔══════════════════════════════════════════════════════════════╗
║                    MCPOLOGY LAYOUT                           ║
║            The MCP Fast Lane for Vibe Coders                ║
╚══════════════════════════════════════════════════════════════╝
*/

import type { Metadata } from 'next'
import ErrorBoundary from './components/ErrorBoundary'

export const metadata: Metadata = {
  title: 'MCPology - Like mixology, but for AI context servers',
  description: 'The definitive reference for Model Context Protocol (MCP) servers. Featuring the complete blacklist of schema-breaking MCPs, battle-tested whitelist, and the infamous Memory MCP Double-Dipping Incident™',
  keywords: ['MCP', 'Model Context Protocol', 'Claude Code', 'AI agents', 'schema validation', 'oneOf allOf anyOf'],
  authors: [{ name: 'd16p ventures' }],
  creator: 'd16p ventures',
  publisher: 'd16p ventures',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'MCPology - The MCP Reference Site',
    description: 'Complete blacklist and whitelist of MCP servers for Claude Code CLI',
    url: 'https://mcpology.com',
    siteName: 'MCPology',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCPology - MCP Server Reference',
    description: 'Which MCP servers work and which ones break your CLI',
    creator: '@d16pventures',
  },
  alternates: {
    canonical: 'https://mcpology.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Check for saved theme preference or default to 'dark'
              const theme = localStorage.getItem('theme') || 'dark';
              document.documentElement.setAttribute('data-theme', theme);
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'MCPology',
              description: 'The definitive reference for Model Context Protocol (MCP) servers',
              url: 'https://mcpology.com',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
              },
              author: {
                '@type': 'Organization',
                name: 'd16p ventures',
                url: 'https://www.d16p.com'
              }
            })
          }}
        />
      </head>
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}