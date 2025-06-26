import './globals.css'

const blacklist = [
  {
    name: "memory (mcp-memory-service)",
    status: "incompatible",
    error: "Tool 293/318/328 - 'input_schema does not support oneOf, allOf, or anyOf at the top level'",
    date: "2025-06-26",
    notes: "The Great Double-Dipping Incident™ - Works in Claude Desktop but breaks CLI. Discovered after 45 minutes of debugging at 2 AM. Multiple instances were running as zombie processes causing schema conflicts.",
    alternative: "Use Notion MCP or other storage solutions"
  },
  {
    name: "@modelcontextprotocol/server-everything",
    status: "incompatible",
    error: "Tool 293 - schema validation failure",
    date: "2025-06-26",
    notes: "The pain of existence - loads 300+ tools with schema issues",
    alternative: "Use specific MCPs for needed functionality"
  },
  {
    name: "@modelcontextprotocol/server-time",
    status: "dead",
    error: "NPM 404 - Package doesn't exist",
    date: "2025-06-26",
    notes: "DOES NOT EXIST IN REGISTRY",
    alternative: "Use system date command"
  },
  {
    name: "@modelcontextprotocol/server-brave-search",
    status: "dead",
    error: "Failed to initialize",
    date: "2025-06-26",
    notes: "Non-functional or missing dependencies",
    alternative: "Use perplexity or web search"
  },
  {
    name: "brave-search-mcp@latest",
    status: "incompatible",
    error: "Connection issues and potential schema problems",
    date: "2025-06-26",
    notes: "Known issues with Claude Desktop/Code",
    alternative: "Use perplexity or web search"
  },
  {
    name: "@ibraheem4/linear-mcp",
    status: "incompatible",
    error: "input_schema does not support oneOf, allOf, or anyOf at the top level",
    date: "2025-06-26",
    notes: "Schema incompatibility",
    alternative: "Use official Linear remote MCP: mcp.linear.app/sse"
  },
  {
    name: "@alanse/mcp-neo4j-server",
    status: "incompatible",
    error: "Schema validation failure",
    date: "2025-06-26",
    notes: "Top-level schema incompatibility",
    alternative: "Use Neo4j directly or Docker"
  },
  {
    name: "@sylweriusz/mcp-neo4j-memory-server",
    status: "incompatible",
    error: "Same schema issues as above",
    date: "2025-06-26",
    notes: "Incompatible schema structure",
    alternative: "Direct Neo4j connection"
  },
  {
    name: "@dandeliongold/mcp-time",
    status: "incompatible",
    error: "Tool 247 - schema incompatibility",
    date: "2025-06-26",
    notes: "oneOf/allOf schema issues",
    alternative: "Use system date command"
  },
  {
    name: "@modelcontextprotocol/server-puppeteer",
    status: "incompatible",
    error: "Caused immediate schema failure when added",
    date: "2025-06-26",
    notes: "Likely schema incompatibility",
    alternative: "Use Playwright MCP (working)"
  }
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
    notes: "CRITICAL - DO NOT DISABLE. 'If you cut that wire I am fucked' - The backbone of everything"
  },
  {
    name: "context7",
    package: "@upstash/context7-mcp@latest",
    tier: 1,
    status: "essential",
    reliability: "100%",
    lastTested: "2025-06-26",
    features: "Library documentation, code examples, API references",
    notes: "Essential for documentation. No schema issues."
  },
  {
    name: "github",
    package: "ghcr.io/github/github-mcp-server",
    tier: 2,
    status: "working",
    reliability: "95%",
    lastTested: "2025-06-26",
    features: "Full GitHub API access, issue management, PR operations",
    notes: "Docker image. Occasional startup delays."
  },
  {
    name: "notion",
    package: "@notionhq/notion-mcp-server",
    tier: 2,
    status: "working",
    reliability: "95%",
    lastTested: "2025-06-26",
    features: "Page management, database operations, content creation",
    notes: "Excellent memory alternative after the Memory MCP incident"
  },
  {
    name: "stripe",
    package: "@stripe/mcp",
    tier: 2,
    status: "working",
    reliability: "98%",
    lastTested: "2025-06-26",
    features: "Payment processing, customer management, invoicing",
    notes: "Production ready. Use --tools=all for full functionality"
  },
  {
    name: "playwright",
    package: "@playwright/mcp@latest",
    tier: 2,
    status: "working",
    reliability: "95%",
    lastTested: "2025-06-26",
    features: "Browser automation, E2E testing, screenshots",
    notes: "Essential for testing. Install browsers with npx playwright install"
  },
  {
    name: "linear",
    package: "mcp-remote via mcp.linear.app/sse",
    tier: 3,
    status: "working",
    reliability: "85%",
    lastTested: "2025-06-26",
    features: "Issue tracking, project management",
    notes: "Use official remote version. Do NOT use npm packages!"
  }
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
  {
    combo: "The Production Stack",
    description: "Battle-tested for CaseOS deployment",
    recipe: {
      "desktop-commander": "File operations",
      "context7": "Documentation",
      "github": "Version control",
      "notion": "Knowledge base (replaced memory MCP)",
      "stripe": "Payments",
      "playwright": "Testing",
      "linear": "Project management"
    },
    useCase: "Full production environment"
  }
]

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <pre className="ascii-header">{`███╗   ███╗ ██████╗██████╗  ██████╗ ██╗      ██████╗  ██████╗██╗   ██╗
████╗ ████║██╔════╝██╔══██╗██╔═══██╗██║     ██╔═══██╗██╔════╝╚██╗ ██╔╝
██╔████╔██║██║     ██████╔╝██║   ██║██║     ██║   ██║██║  ███╗╚████╔╝ 
██║╚██╔╝██║██║     ██╔═══╝ ██║   ██║██║     ██║   ██║██║   ██║ ╚██╔╝  
██║ ╚═╝ ██║╚██████╗██║     ╚██████╔╝███████╗╚██████╔╝╚██████╔╝  ██║   
╚═╝     ╚═╝ ╚═════╝╚═╝      ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝   ╚═╝`}</pre>
        <h1>MCPology</h1>
        <p className="hero-subtitle">Like mixology, but for AI context servers</p>
        <nav className="nav">
          <a href="#blacklist" className="active">Blacklist</a>
          <a href="#whitelist">Whitelist</a>
          <a href="#favorites">Our Favorites</a>
          <a href="#submit">Submit</a>
        </nav>
      </header>

      <section id="blacklist" className="section">
        <h2>🚫 The Blacklist</h2>
        <p>MCPs that will ruin your day. Learn from our pain.</p>
        
        {blacklist.map((item, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <h3 className="card-title">{item.name}</h3>
              <span className={`status ${item.status}`}>{item.status}</span>
            </div>
            <div className="card-meta">Added: {item.date}</div>
            <div className="card-content">
              <p><strong>Error:</strong> {item.error}</p>
              <p><strong>Notes:</strong> {item.notes}</p>
              <p><strong>Alternative:</strong> {item.alternative}</p>
            </div>
          </div>
        ))}
      </section>

      <section id="whitelist" className="section">
        <h2>✅ The Whitelist</h2>
        <p>Battle-tested MCPs that actually work.</p>
        
        {whitelist.map((item, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <h3 className="card-title">{item.name}</h3>
              <span className={`status ${item.tier === 1 ? 'essential' : 'working'}`}>
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
            </div>
          </div>
        ))}
      </section>

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
        <p>Maintained with 🥃 by d16p ventures | Last incident: {new Date().toISOString().split('T')[0]}</p>
      </footer>
    </div>
  )
}