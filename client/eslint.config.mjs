import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintPluginJest from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    plugins: {
      jest: eslintPluginJest,
    },
    languageOptions: {
      globals: globals.jest,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/standalone/**',
      '.next/**',
      'out/**',
      'build/**',
      'pnpm-lock.yaml',
    ],
  },
];
