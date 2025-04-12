// commitlint.config.js

module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "subject-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        "client",
        "server",
        "docker",
        "terminal",
        "wasm",
        "tests",
        "none",
      ],
    ],
  },
  prompt: {
    messages: {
      skip: ":skip",
      max: "upper %d chars",
      min: "%d chars at least",
      emptyWarning: "can not be empty",
      upperLimitWarning: "over limit",
      lowerLimitWarning: "below limit",
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description: "A new feature",
            title: "Features",
            emoji: "✨",
          },
          fix: {
            description: "A bug fix",
            title: "Bug Fixes",
            emoji: "🐛",
          },
          docs: {
            description: "Documentation only changes",
            title: "Docs",
            emoji: "📚",
          },
          style: {
            description: "Code style changes (formatting, etc)",
            title: "Styles",
            emoji: "💎",
          },
          refactor: {
            description:
              "Code changes that neither fix a bug nor add a feature",
            title: "Refactors",
            emoji: "📦",
          },
          perf: {
            description: "Performance improvements",
            title: "Performance",
            emoji: "🚀",
          },
          test: {
            description: "Adding or updating tests",
            title: "Tests",
            emoji: "🚨",
          },
          build: {
            description: "Build system or dependency changes",
            title: "Builds",
            emoji: "🛠",
          },
          ci: {
            description: "CI configuration changes",
            title: "CI",
            emoji: "⚙️",
          },
          chore: {
            description: "Routine tasks and maintenance",
            title: "Chores",
            emoji: "♻️",
          },
          revert: {
            description: "Reverting previous commits",
            title: "Reverts",
            emoji: "🗑",
          },
        },
      },
      scope: {
        description: "Select the scope of this change:",
      },
      subject: {
        description:
          "Write a short, imperative tense description of the change:",
      },
      body: {
        description: "Provide a longer description of the change (optional):",
      },
      isBreaking: {
        description: "Are there any breaking changes?",
      },
      breakingBody: {
        description: "Provide more detail on the breaking changes:",
      },
      breaking: {
        description: "Action causing the breaking changes:",
      },
      isIssueAffected: {
        description: "Does this change affect any open issues?",
      },
      issuesBody: {
        description: "If issues are closed, provide a body description:",
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #456"):',
      },
    },
  },
};
