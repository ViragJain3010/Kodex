# Kodex Contribution Guide

Thanks for checking out Kodex! This guide will help you contribute effectively by following the conventions and tooling we’ve set up in the project.

## Project Setup

We use a monorepo powered by `pnpm` with the following structure:

```
Kodex/
├── client/     # Next.js frontend
├── server/     # Express.js backend
├── .husky/     # Git hooks
├── .github/    # GitHub Actions workflows
├── package.json
└── pnpm-workspace.yaml
```

Make sure you have `pnpm` installed globally:
```bash
npm install -g pnpm
```

Then install dependencies:
```bash
pnpm install
```

## Linting & Formatting

We use:
- **ESLint** (configured with `eslint.config.mjs`)
- **Prettier**
- **Husky** and **lint-staged** for pre-commit checks

To manually lint or format your code:
```bash
pnpm lint                           # Check for lint errors
pnpm lint:fix                     # Auto-fix lint errors
pnpm format                     # Format using Prettier
pnpm format:check          # Check format
```

## 🔐 Git Commit Message Rules (Commitlint)

We follow the **Conventional Commits** standard. Commit messages must follow this structure:

```
<type>(optional scope): <short description>
```

### 🎯 Accepted Types:

| Type        | Description |
|-------------|-------------|
| **build**   | Build system or dependency changes |
| **chore**   | Misc chores (e.g. .gitignore) |
| **ci**      | CI/CD related changes |
| **docs**    | Documentation only |
| **feat**    | New feature |
| **fix**     | Bug fix |
| **perf**    | Performance improvements |
| **refactor**| Code refactor (no behavior change) |
| **revert**  | Revert a previous commit |
| **style**   | Code style changes |
| **test**    | Test-related changes |

### Examples:
```bash
feat(editor): add dark mode support
fix(auth): handle token expiration
chore: update .gitignore
```

> 💡 Run `pnpm commitlint --edit <commit-msg>` manually if you want to test a message before committing.

---

## 🧪 Testing

- Unit tests: `pnpm test`
- Run in watch mode: `pnpm test:watch`
- CI test: `pnpm test:ci`

Each workspace (client/server) defines its own `jest` and test setup.

---

## 📂 Ignore Files

We're ignoring:
- `node_modules`, `.env`, `.next`, `/out`, `.turbo`
- `pnpm-lock.yaml` (we do not commit lockfile in this repo)
- `coverage/` folder (created by test coverage tools)

---

If you’re unsure about anything, feel free to ask in a discussion or open a draft PR!

Happy hacking 🚀

