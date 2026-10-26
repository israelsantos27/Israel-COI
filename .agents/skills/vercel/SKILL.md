---
name: vercel
description: >-
  Manage Vercel deployments, projects, domains, and environment variables.
  Use when the user wants to deploy a web application to Vercel, link a project, configure domains,
  inspect deployment logs, or use Vercel MCP tools.
---

# Vercel Deployment & Management Skill

This skill guides Vercel deployments and project management using the Vercel CLI and the Vercel MCP server in Antigravity.

## Prerequisites & Authentication

1. **Verify Vercel CLI:**
   ```powershell
   vercel --version
   ```

2. **Authenticate with Vercel:**
   Run interactive login to connect to your Vercel account:
   ```powershell
   vercel login
   ```
   Or verify who you are logged in as:
   ```powershell
   vercel whoami
   ```

3. **Vercel MCP Server:**
   The official hosted MCP server is configured at `https://mcp.vercel.com` in `~/.gemini/config/mcp_config.json`.
   It allows querying deployments, reading runtime logs, and checking project analytics directly inside Antigravity via OAuth.

---

## Common Workflows

### 1. Linking a Project to Vercel
In the project directory:
```powershell
# Link current folder to an existing or new Vercel project
vercel link
```

### 2. Deploying Preview & Production
```powershell
# Preview deployment (for staging / review)
vercel

# Production deployment
vercel --prod
```

### 3. Environment Variables
```powershell
# Pull remote environment variables to local .env
vercel env pull .env.local

# Add a new environment variable to Vercel
vercel env add <KEY> production
```

### 4. Inspecting Deployments & Logs
```powershell
# List recent deployments
vercel list

# Stream real-time logs for the latest deployment
vercel logs <deployment-url-or-id>
```
