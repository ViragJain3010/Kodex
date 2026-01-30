# Kodex Internal Dev Documentation

This is a comprehensive internal reference guide documenting everything implemented during the Kodex development process, covering configuration, tooling, standards, and design decisions. It is not part of the public README but serves as a modular record of learnings and practices.

## 1. Monorepo Structure

Kodex follows a monorepo architecture with PNPM workspaces, allowing independent deployments and tooling for both frontend and backend.

```
Kodex/
├── client/                                 # Frontend (Next.js)
├── server/                                 # Backend (Express.js)
├── pnpm-workspace.yaml                     # workspace managment
├── .husky/                                 # Git hooks managed by Husky
├── .github/                                # GitHub Actions CI workflows
├── .lintstagedrc.json                      # Lint-Staged config file
├── .turbo.json                             # Turbo config file
└── commitlint.config.js                    # commitlint config file
```

> Even though PNPM workspaces are configured, we intentionally manage `client/` and `server/` dependencies separately due to independent deployment.

## 2. Linting and Prettier Setup

### ESLint

- ESLint is configured individually inside both `client/` and `server/` directories.
- Base config extended from `next/core-web-vitals` for the frontend.
- Custom rules were added based on code style and preferences.

### eslint.config.js

Kodex uses the newer `eslint.config.js` format introduced in ESLint v9+. This format uses pure JavaScript (instead of `.eslintrc`) and gives access to programmatic rules and better config composition.

```js
import js from "@eslint/js";
import next from "next";

export default [
  js.configs.recommended,
  next.coreWebVitals,
  {
    rules: {
      // custom rules here
    },
  },
];
```

> In the client, we use `eslint.config.mjs` because the project (built with Next.js and App Router) runs entirely on modern **ESM (ECMAScript Modules)**. ESLint in this setup also uses the new flat config format, which requires ESM and import statements—hence the `.mjs` extension is necessary to avoid syntax issues. On the other hand, the server is built with Express.js using the traditional **CommonJS (CJS) module system**, so a regular `eslint.config.js` works just fine there. _This separation reflects the underlying environments: a modern ESM-based frontend and a conventional CJS backend, each configured accordingly._

### Prettier

- `.prettierrc` files are added individually inside both `client/` and `server/` directories since the frontend and backend are maintained and deployed independently.
- Prettier is used to ensure consistent code formatting across both parts of the codebase.
- We integrated `eslint-plugin-prettier` to run Prettier as an ESLint rule, allowing linting and formatting issues to be caught in one go.

#### Custom Styling via Prettier

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "avoid"
}
```

## 3. Husky + Git Hooks + Lint-Staged

### Husky Setup

- [Husky](https://typicode.github.io/husky/) was used to bootstrap the hooks.
- Hooks managed: `pre-commit`, `commit-msg`

### Pre-commit

- Runs [Lint-Staged](https://github.com/lint-staged/lint-staged) to only lint the staged files.
- Each project has independent ESLint setup.

### Prepare-commit-msg

- Uses [@commitlint/cz-commitlint](https://commitlint.js.org/reference/prompt.html) + [Commitzen CLI](https://github.com/commitizen/cz-cli) to create github commits.
- The questions and options in the dropdown can be customised in `commitlint.config.js`

### Commit-msg

- Uses `@commitlint/cli` and `@commitlint/config-conventional`.
- Validates message format like `type(scope): subject`.
- Shows colorful terminal output and helpful tip if validation fails.

> Remember to run **`pnpm prepare`** everytime you add or remove a hook or else the symlink for husky and git wont be established for the new hook

## 4. Commit Flow: Commitizen + Commitlint

### Commitizen

- Installed globally with `cz-cli`
- Runs using `pnpm cz` in the root.
- Prompts user with a wizard to craft a valid commit message.

### Commitlint

- Configured via `commitlint.config.js`
- Ensures commit messages follow Conventional Commits
- Used by `commit-msg` hook via Husky

## 5. Developer Experience Enhancements

### Custom Hooks Output

- All hooks show formatted messages using ANSI colors (✅, ❌, 💡, 🧪)
- Pre-push includes motivational dev quotes from a `RANDOM_QUOTES` pool, the logic was written in POSIX as bash/sh wasn't supported.

```bash
# This is written in bash for simplicity
RANDOM_QUOTES=(
  "Writing tests is like doubting your ability to code. ☠️"
  "Only Legends say – It works on my machine 🪦"
  "Fast, good, cheap: pick any two ⚖️"
  "Programming is the art of adding bugs to an empty file 🐛"
)

random_index=$((RANDOM % ${#RANDOM_QUOTES[@]}))
echo "💬 ${RANDOM_QUOTES[$random_index]}"
```

## 6. Testing: Jest, Babel, Setup

### Why Babel was needed

- Because the frontend uses modern ESM syntax and Next.js features, we needed Babel for Jest to transpile them during testing.

### babel.config.js → babel-jest.config.js

- **Problem**: Next.js internally uses a Babel config for compiling its own code (SWC compiler) which was being overridden by `babel.config.js` created for Jest.
- **Fix**: Renamed the config to `babel-jest.config.js` and explicitly pointed Jest to use it, preventing collision.

### jest.config.js

- Main Jest configuration
- Points to the custom Babel config

```js
module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { configFile: "./babel-jest.config.js" },
    ],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
```

### jest.setup.js

- Adds testing environment setup like React Testing Library config

```js
import "@testing-library/jest-dom/extend-expect";
```

> `jest.setup.js` ensures DOM matchers are available globally in all tests.

---

## 7. PNPM Workspaces

- Defined in `pnpm-workspace.yaml`

```yaml
packages:
  - "client"
  - "server"
```

- Lockfile and dependency hoisting are isolated between `client/` and `server/`
- Explicit decision to avoid global `node_modules`

## 8. GitHub Actions CI (basic)

- Workflows are kept in `.github/workflows/`
- Frontend and backend have independent jobs
- Lint and test on pull requests

---

This document can be updated continuously as new tooling, configuration, or practices are adopted.
