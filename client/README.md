# Kodex Client

The **Client** is the frontend application for the Kodex platform, providing a seamless and interactive code editing and execution experience. Built with **Next.js**, **Monaco Editor**, and **XTerm.js**, it offers a terminal-like environment for developers to write, run, and debug code in real-time.

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [Directory Structure](#directory-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Available Scripts](#available-scripts)

## Requirements

- **Node.js** (version 18 or higher)
- **pnpm** (preferred package manager)

## Setup

1. **Navigate to the Client Directory:**

   ```bash
   cd client
   ```

2. **Install Dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure the Environment:**
   - Create a `.env` file in the `client` directory based on the project requirements (e.g., API URLs if needed).

4. **Run the Development Server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory Structure

- **`src/app/`**: Next.js App Router pages and layouts.
- **`src/components/`**: Reusable UI components (Editor, Terminal, Navbar, etc.).
- **`src/context/`**: React Context providers for global state management (e.g., Editor settings).
- **`src/lib/`**: Library configurations and external integrations.
- **`src/tests/`**: Test files for components and utilities.
- **`src/utils/`**: Helper functions and utility classes.

## Features

- **Monaco Editor Integration**: Fully-featured code editor with syntax highlighting and multi-language support.
- **Integrated Terminal**: Real-time terminal output using XTerm.js, providing an authentic CLI experience.
- **Responsive Design**: Clean and modern UI built with TailwindCSS, optimized for different screen sizes.
- **Dynamic Theme Switching**: Support for dark and light modes.
- **Real-time Execution**: Instant feedback on code execution through integration with the Kodex Server.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Code Editor**: [@monaco-editor/react](https://github.com/suren-atoyan/monaco-react)
- **Terminal Emulator**: [XTerm.js](https://xtermjs.org/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Available Scripts

In the `client` directory, you can run:

| Command              | Description                                        |
| :------------------- | :------------------------------------------------- |
| `pnpm dev`           | Starts the development server.                     |
| `pnpm build`         | Builds the application for production.             |
| `pnpm start`         | Starts the production server.                      |
| `pnpm lint`          | Runs ESLint and Prettier to fix code style issues. |
| `pnpm test`          | Runs the test suite using Turbo and Jest.          |
| `pnpm test:coverage` | Runs tests and generates a coverage report.        |
