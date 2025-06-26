export const metadata = {
  title: 'MCPology - The Art & Science of Model Context Protocol',
  description: 'Like mixology, but for AI context servers. Curated MCP server blacklists, whitelists, and battle-tested configurations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}