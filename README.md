# MCPology.com

> Like mixology, but for AI context servers

## The Great Memory MCP Double-Dipping Incident™

On June 26, 2025, at 2:00 AM PDT, what should have been a simple production deployment turned into a 45-minute debugging odyssey. The culprit? Memory MCP was "double-dipping" - running in multiple config files AND as zombie processes, causing schema validation errors that blocked every single command in Claude Code CLI.

## What is MCPology?

MCPology is a brutalist-style reference site for Model Context Protocol (MCP) servers, featuring:

- **The Blacklist** - MCPs that will ruin your day (with dates and reasons)
- **The Whitelist** - Battle-tested MCPs with reliability ratings
- **Our Favorites** - Curated MCP "recipes" for specific use cases
- **War Stories** - Real debugging tales from the trenches

## Features

- Brutalist design inspired by Gumroad and Gitingest
- Complete blacklist with schema error details
- Whitelist with recency data and reliability ratings
- Personal favorite MCP combinations
- The full story of the Memory MCP incident

## Tech Stack

- Next.js 15
- TypeScript
- Brutalist CSS (no frameworks, pure CSS)
- Deployed on Vercel

## Local Development

```bash
npm install
npm run dev
```

## Contributing

Found an MCP that breaks Claude? Submit a PR with:
- MCP name and package
- Error details
- Date discovered
- Alternative solutions

## License

MIT - Because debugging MCPs at 2 AM shouldn't be proprietary knowledge.

---

Built with 🥃 by d16p ventures after too much debugging