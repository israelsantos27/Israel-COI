---
name: github
description: >-
  Work with GitHub repositories, pull requests, issues, releases, and GitHub Actions.
  Use when the user wants to initialize a git repo, push code to GitHub, open PRs, manage issues,
  check CI/CD runs, or connect GitHub MCP tools.
---

# GitHub Workflow & Integration Skill

This skill guides GitHub interactions using both the GitHub CLI (`gh`), Git, and the GitHub MCP server in Antigravity.

## Prerequisites & Authentication

1. **Verify Git & GitHub CLI:**
   ```powershell
   git --version
   gh --version
   ```

2. **Authenticate with GitHub CLI:**
   Run the interactive browser-based authentication:
   ```powershell
   gh auth login --web -p https
   ```
   Check authentication status:
   ```powershell
   gh auth status
   ```

3. **Authenticate the GitHub MCP Server (Optional):**
   - Create a GitHub Personal Access Token (PAT) at https://github.com/settings/tokens
   - Required scopes: `repo`, `read:org`, `workflow`
   - Add it to `~/.gemini/config/mcp_config.json` under `mcpServers.github.env.GITHUB_PERSONAL_ACCESS_TOKEN`.

---

## Common Workflows

### 1. Initialize & Publish a New Repository
```powershell
# Initialize git if not already done
git init -b main
git add .
git commit -m "Initial commit"

# Create a new remote repository and push (public or private)
gh repo create <repo-name> --public --source=. --remote=origin --push
```

### 2. Status & Branch Management
```powershell
# Check current repo status
git status
gh repo view

# Create and switch to a feature branch
git checkout -b feature/my-new-feature
```

### 3. Pull Requests
```powershell
# Push branch to remote
git push -u origin feature/my-new-feature

# Create a pull request interactively or via CLI
gh pr create --title "Feature title" --body "Description of changes"

# View status of open PRs
gh pr list
gh pr checks
```

### 4. Issues & Workflow Runs
```powershell
# List open issues
gh issue list
# Create an issue
gh issue create --title "Issue title" --body "Issue description"

# Inspect GitHub Actions runs
gh run list
gh run view
```
