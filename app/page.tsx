/*
╔══════════════════════════════════════════════════════════════╗
║                    MCPOLOGY MAIN PAGE                        ║
║            The MCP Fast Lane for Vibe Coders                ║
║      Devs are tolerated if they don't kill the vibe         ║
╚══════════════════════════════════════════════════════════════╝
*/

'use client'

import './globals.css'
import { useState, useEffect } from 'react'

// Enhanced blacklist with exact versions and replication steps
const blacklist = [
  {
    name: "memory (mcp-memory-service)",
    package: "npm install mcp-memory-service@0.1.2",
    status: "incompatible",
    version: "0.1.2",
    error: "Tool 293/318/328 - 'input_schema does not support oneOf, allOf, or anyOf at the top level'",
    date: "2025-06-26",
    notes: "The Great Double-Dipping Incident™ - Works in Claude Desktop but breaks CLI. Discovered after 45 minutes of debugging at 2 AM. Multiple instances were running as zombie processes causing schema conflicts.",
    alternative: "Use Notion MCP or other storage solutions",
    replication: "1. Install in both claude_desktop_config.json and config.json\n2. Run any Claude Code command\n3. Watch schema validation errors cascade"
  },
  {
    name: "@modelcontextprotocol/server-everything",
    package: "npm install @modelcontextprotocol/server-everything@0.5.0",
    status: "incompatible",
    version: "0.5.0",
    error: "Tool 293 - schema validation failure",
    date: "2025-06-26",
    notes: "The pain of existence - loads 300+ tools with schema issues",
    alternative: "Use specific MCPs for needed functionality",
    replication: "Just add to config and cry"
  },
  {
    name: "@modelcontextprotocol/server-time",
    package: "npm install @modelcontextprotocol/server-time",
    status: "dead",
    version: "N/A",
    error: "NPM 404 - Package doesn't exist",
    date: "2025-06-26",
    notes: "DOES NOT EXIST IN REGISTRY",
    alternative: "Use system date command",
    replication: "Try to install it. 404 every time."
  },
  {
    name: "@modelcontextprotocol/server-brave-search",
    package: "npm install @modelcontextprotocol/server-brave-search@0.1.0",
    status: "dead",
    version: "0.1.0",
    error: "Failed to initialize",
    date: "2025-06-26",
    notes: "Non-functional or missing dependencies",
    alternative: "Use perplexity or web search",
    replication: "Install and watch it fail silently"
  },
  {
    name: "brave-search-mcp@latest",
    package: "npm install brave-search-mcp@latest",
    status: "incompatible",
    version: "latest",
    error: "Connection issues and potential schema problems",
    date: "2025-06-26",
    notes: "Known issues with Claude Desktop/Code",
    alternative: "Use perplexity or web search",
    replication: "Add to config, connection timeouts ensue"
  },
  {
    name: "@ibraheem4/linear-mcp",
    package: "npm install @ibraheem4/linear-mcp@1.0.0",
    status: "incompatible",
    version: "1.0.0",
    error: "input_schema does not support oneOf, allOf, or anyOf at the top level",
    date: "2025-06-26",
    notes: "Schema incompatibility",
    alternative: "Use official Linear remote MCP: mcp.linear.app/sse",
    replication: "Add to config, get schema errors on any Linear command"
  },
]

const whitelist = [
  {
    name: "desktop-commander",
    package: "@wonderwhy-er/desktop-commander@latest",
    tier: 1,
    status: "essential",
    reliability: "100%",
    lastTested: "2025-06-26",
    features: "Terminal control, file operations, process management",
    notes: "CRITICAL - DO NOT DISABLE. 'If you cut that wire I am fucked' - The backbone of everything",
    config: {
      "desktop-commander": {
        "command": "npx",
        "args": [
          "-y",
          "@wonderwhy-er/desktop-commander"
        ]
      }
    }
  },
  {
    name: "context7",
    package: "@upstash/context7-mcp@latest",
    tier: 1,
    status: "essential",
    reliability: "100%",
    lastTested: "2025-06-26",
    features: "Library documentation, code examples, API references",
    notes: "Essential for documentation. No schema issues.",
    config: {
      "context7": {
        "command": "npx",
        "args": [
          "-y",
          "@upstash/context7-mcp@latest"
        ]
      }
    }
  },
  {
    name: "github",
    package: "ghcr.io/github/github-mcp-server",
    tier: 2,
    status: "working",
    reliability: "95%",
    lastTested: "2025-06-26",
    features: "Full GitHub API access, issue management, PR operations",
    notes: "Docker image. Occasional startup delays.",
    config: {
      "github": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "--pull=always",
          "ghcr.io/github/github-mcp-server"
        ],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "your-token-here"
        }
      }
    }
  },
]

const personalFavorites = [
  {
    combo: "The Developer's Daily",
    description: "My go-to setup for everyday coding",
    recipe: {
      "desktop-commander": "Always on",
      "context7": "For docs",
      "github": "For repos",
      "playwright": "For testing"
    },
    useCase: "General development work"
  },
  {
    combo: "The Debugging Special",
    description: "When shit hits the fan at 2 AM",
    recipe: {
      "desktop-commander": "Core functionality",
      "context7": "Emergency docs"
    },
    useCase: "Minimal setup to isolate MCP issues"
  },
]

export default function Home() {
  const [theme, setTheme] = useState('dark')
  const [filter, setFilter] = useState('all')
  const [copiedConfig, setCopiedConfig] = useState<string | null>(null)
  const [comments, setComments] = useState<{[key: string]: string[]}>({})
  const [showCommentForm, setShowCommentForm] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Load theme and comments on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    
    const savedComments = localStorage.getItem('mcpology-comments')
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }
  }, [])

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Copy config to clipboard
  const copyConfig = (config: any, name: string) => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2))
    setCopiedConfig(name)
    setTimeout(() => setCopiedConfig(null), 2000)
  }

  // Download config file
  const downloadConfig = (config: any, name: string) => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${name}-mcp-config.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  // Add comment
  const addComment = (itemId: string, comment: string) => {
    const newComments = {
      ...comments,
      [itemId]: [...(comments[itemId] || []), comment]
    }
    setComments(newComments)
    localStorage.setItem('mcpology-comments', JSON.stringify(newComments))
    setShowCommentForm(null)
  }

  // Filter items
  const filterItems = (items: any[], type: 'blacklist' | 'whitelist') => {
    return items.filter(item => {
      const matchesFilter = filter === 'all' || item.status === filter
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.notes?.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }

  return (
    <div className="container">
      {/* Theme Toggle */}
      <button onClick={toggleTheme} className="theme-toggle btn">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <header className="header">
        <pre className="ascii-header" style={{ textAlign: 'center' }}>{`
███╗   ███╗ ██████╗██████╗  ██████╗ ██╗      ██████╗  ██████╗██╗   ██╗
████╗ ████║██╔════╝██╔══██╗██╔═══██╗██║     ██╔═══██╗██╔════╝╚██╗ ██╔╝
██╔████╔██║██║     ██████╔╝██║   ██║██║     ██║   ██║██║  ███╗╚████╔╝ 
██║╚██╔╝██║██║     ██╔═══╝ ██║   ██║██║     ██║   ██║██║   ██║ ╚██╔╝  
██║ ╚═╝ ██║╚██████╗██║     ╚██████╔╝███████╗╚██████╔╝╚██████╔╝  ██║   
╚═╝     ╚═╝ ╚═════╝╚═╝      ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝   ╚═╝`}</pre>

        {/* Hero Section */}
        <div className="hero">
          <h1>1-CLICK DREAM MCP SETUP</h1>
          <p className="hero-subtitle">
            The MCP Fast Lane for Vibe Coders<br/>
            <small>Devs are tolerated on the condition that they strictly don't kill the vibe</small>
          </p>
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', opacity: 0.8 }}>
            📋 Please read the sign at the reception
          </div>
        </div>

        <nav className="nav">
          <a href="#whitelist" className={filter === 'all' ? 'active' : ''}>
            Whitelist
          </a>
          <a href="#blacklist">
            Blacklist
          </a>
          <a href="#favorites">
            Favorites
          </a>
          <a href="/llms.txt" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            LLMs.txt <span className="badge-new">NEW</span>
          </a>
        </nav>

        {/* Animated ASCII Sign */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <pre className="neon-sign" style={{ 
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            animation: 'neonFlicker 1s infinite'
          }}>{`
╔═══════════════════════════════════════╗
║     DEVS DON'T KILL MY VIBE          ║
╚═══════════════════════════════════════╝
          `}</pre>
        </div>

        {/* Search and Filter */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search MCPs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="btn"
            style={{ flex: 1, minWidth: '200px' }}
          />
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="btn"
          >
            <option value="all">All Status</option>
            <option value="working">Working</option>
            <option value="essential">Essential</option>
            <option value="incompatible">Incompatible</option>
            <option value="dead">Dead</option>
          </select>
        </div>
      </header>

      {/* Whitelist Section (First!) */}
      <section id="whitelist" className="section">
        <h2>✅ The Whitelist</h2>
        <p>Battle-tested MCPs that actually work. Start here for happiness.</p>
        
        {filterItems(whitelist, 'whitelist').map((item, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <h3 className="card-title">{item.name}</h3>
              <span className={`status ${item.tier === 1 ? 'essential' : 'working'}`} style={{ fontSize: '1.25rem', padding: '0.75rem 1.25rem' }}>
                Tier {item.tier} - {item.status}
              </span>
            </div>
            <div className="card-meta">
              Reliability: {item.reliability} | Last tested: {item.lastTested}
            </div>
            <div className="card-content">
              <p><strong>Package:</strong> <code>{item.package}</code></p>
              <p><strong>Features:</strong> {item.features}</p>
              <p><strong>Notes:</strong> {item.notes}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button 
                  className="btn"
                  onClick={() => copyConfig(item.config, item.name)}
                >
                  {copiedConfig === item.name ? '✓ Copied!' : '📋 Copy Config'}
                </button>
                <button 
                  className="btn"
                  onClick={() => downloadConfig(item.config, item.name)}
                >
                  💾 Download
                </button>
                <button 
                  className="btn"
                  onClick={() => setShowCommentForm(showCommentForm === item.name ? null : item.name)}
                >
                  💬 Comment ({comments[item.name]?.length || 0})
                </button>
              </div>

              {/* Comments */}
              {comments[item.name]?.map((comment, i) => (
                <div key={i} style={{ marginTop: '0.5rem', padding: '0.5rem', background: 'var(--border)', borderRadius: '8px' }}>
                  {comment}
                </div>
              ))}

              {/* Comment Form */}
              {showCommentForm === item.name && (
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const input = e.currentTarget.comment as HTMLInputElement
                  if (input.value) {
                    addComment(item.name, input.value)
                    input.value = ''
                  }
                }} style={{ marginTop: '1rem' }}>
                  <input
                    name="comment"
                    type="text"
                    placeholder="Add your experience..."
                    className="btn"
                    style={{ width: '100%' }}
                  />
                </form>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Blacklist Section */}
      <section id="blacklist" className="section">
        <h2>🚫 The Blacklist</h2>
        <p>MCPs that will ruin your day. Learn from our pain.</p>
        
        {filterItems(blacklist, 'blacklist').map((item, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <h3 className="card-title">{item.name}</h3>
              <span className={`status ${item.status}`} style={{ fontSize: '1.5rem', padding: '1rem 1.5rem', fontWeight: 900 }}>
                {item.status.toUpperCase()}
              </span>
            </div>
            <div className="card-meta">Added: {item.date} | Version: {item.version}</div>
            <div className="card-content">
              <p><strong>Package:</strong> <code>{item.package}</code></p>
              <p><strong>Error:</strong> {item.error}</p>
              <p><strong>Notes:</strong> {item.notes}</p>
              <p><strong>Alternative:</strong> {item.alternative}</p>
              <details style={{ marginTop: '1rem' }}>
                <summary style={{ cursor: 'pointer' }}>🔬 Replication Steps</summary>
                <pre style={{ marginTop: '0.5rem', whiteSpace: 'pre-wrap' }}>{item.replication}</pre>
              </details>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button 
                  className="btn"
                  onClick={() => setShowCommentForm(showCommentForm === item.name ? null : item.name)}
                >
                  💬 Disagree? Comment ({comments[item.name]?.length || 0})
                </button>
              </div>

              {/* Comments */}
              {comments[item.name]?.map((comment, i) => (
                <div key={i} style={{ marginTop: '0.5rem', padding: '0.5rem', background: 'var(--border)', borderRadius: '8px' }}>
                  {comment}
                </div>
              ))}

              {/* Comment Form */}
              {showCommentForm === item.name && (
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const input = e.currentTarget.comment as HTMLInputElement
                  if (input.value) {
                    addComment(item.name, input.value)
                    input.value = ''
                  }
                }} style={{ marginTop: '1rem' }}>
                  <input
                    name="comment"
                    type="text"
                    placeholder="Share your experience..."
                    className="btn"
                    style={{ width: '100%' }}
                  />
                </form>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Favorites Section */}
      <section id="favorites" className="section">
        <h2>🍸 Our Favorite Recipes</h2>
        <p>Curated MCP combinations for specific use cases.</p>
        
        {personalFavorites.map((fav, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{fav.combo}</h3>
            <p>{fav.description}</p>
            <pre>{JSON.stringify(fav.recipe, null, 2)}</pre>
            <p><strong>Use Case:</strong> {fav.useCase}</p>
          </div>
        ))}
      </section>

      {/* The Incident */}
      <section id="the-incident" className="section">
        <h2>📖 The Memory MCP Double-Dipping Incident</h2>
        <div className="card">
          <div className="card-content">
            <p><strong>Date:</strong> June 26, 2025, 2:00 AM PDT</p>
            <p><strong>Duration:</strong> 45 minutes of pure debugging hell</p>
            <p><strong>The Story:</strong></p>
            <p>
              Picture this: You're ready to deploy your revolutionary codebase after a YEAR of development. 
              Claude Code CLI throws a schema error on EVERY command. You systematically debug, remove MCPs 
              one by one, even use binary search. Nothing works.
            </p>
            <p>
              The plot twist? Memory MCP was "double-dipping" - running in BOTH config files AND as zombie 
              processes from previous sessions. The tool numbers kept changing (293→318→328) because of 
              different load orders. It took 45 minutes to discover memory MCP was the culprit.
            </p>
            <p>
              <strong>Lesson:</strong> Always check ALL config files, kill zombie processes, and remember: 
              "disabled" doesn't mean "not running."
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>MCPology.com - Because debugging MCPs at 2 AM shouldn't be a solo sport</p>
        <p>
          Maintained with 🥃 by <a href="https://www.d16p.com" style={{ color: 'var(--accent)' }}>d16p ventures</a> | 
          Last incident: {new Date().toISOString().split('T')[0]}
        </p>
      </footer>

      <style jsx>{`
        @keyframes neonFlicker {
          0%, 100% { opacity: 0; }
          20% { opacity: 0.2; }
          40% { opacity: 0.4; }
          60% { opacity: 0.6; }
          80% { opacity: 0.8; }
          90% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}