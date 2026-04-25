# Wanmac Web

A modern web application built with [Next.js](https://nextjs.org), featuring a robust UI system with [Mantine](https://mantine.dev) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **Styling & UI:** 
  - [Tailwind CSS 4](https://tailwindcss.com)
  - [Mantine core & hooks](https://mantine.dev)
  - [Lucide React](https://lucide.dev) for icons
- **Animations:** [Motion](https://motion.dev/)
- **Formatting & Linting:** [Biome](https://biomejs.dev)
- **Pre-commit Hooks:** [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged)

## 🏃‍♂️ Getting Started

### Prerequisites

Ensure you have your preferred package manager (npm, yarn, pnpm, or bun) installed. The project currently uses `bun` based on lockfile presence.

### Installation

1. Clone the repository and install dependencies:

```bash
bun install
```

2. Start the development server:

```bash
bun run dev
```

The application will be running with `portless` via Turbo.

## 📜 Scripts

- `bun run dev`: Start standard development server
- `bun run build`: Build for production
- `bun run start`: Start production server
- `bun run preview`: Build and start for previewing
- `bun run check`: Run Biome linter and formatter
- `bun run check:write`: Write fixes for lint/formatting issues
- `bun run typecheck`: Check TypeScript typings

## 🛠️ Code Quality

This project uses [Biome](https://biomejs.dev) over ESLint and Prettier for fast, unified linting and formatting. 
Hooks are set up via Husky and lint-staged to ensure code adheres to the defined standards before committing.
