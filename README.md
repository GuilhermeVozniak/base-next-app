# Base Next.js Setup

🚀 A modern, production-ready Next.js starter template with comprehensive code quality tools and best practices built-in.

## Overview

Get up and running quickly with a carefully crafted Next.js foundation! This template provides everything you need to start building modern web applications with confidence. Includes TypeScript, Tailwind CSS, a beautiful component library, and a complete code quality toolkit to maintain clean, consistent code.

**Focus**: Developer experience, code quality, and modern web development best practices.

## Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: Shadcn/ui + Radix UI
- **Code Quality**: ESLint + Prettier + Husky
- **Package Manager**: pnpm (recommended)

## Quick Start

### Prerequisites

- Node.js 18+ (see `.nvmrc`)
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/GuilhermeVozniak/base-next-app.git
cd base-next-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Commands

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Check code issues
pnpm lint:fix     # Auto-fix issues
pnpm format       # Format code
pnpm type-check   # TypeScript validation
pnpm code-quality # Run all quality checks

# UI Components (Shadcn/ui)
pnpm dlx shadcn@latest add button    # Add button component
pnpm dlx shadcn@latest add card      # Add card component
pnpm dlx shadcn@latest add dialog    # Add dialog component
```

## Features

### ✅ Ready to Use

- **Modern Next.js**: Latest Next.js 15 with React 19
- **TypeScript**: Full type safety out of the box
- **Tailwind CSS**: Utility-first styling with v4
- **Component Library**: Beautiful, accessible components with Shadcn/ui
- **Code Quality**: ESLint, Prettier, Husky pre-configured
- **Git Hooks**: Automated code quality checks on commit/push
- **VS Code Setup**: Optimized editor configuration included

### 🛠️ Code Quality Tools

- **Comprehensive Linting**: TypeScript, React, and Next.js rules
- **Auto-formatting**: Prettier with Tailwind class sorting
- **Type Checking**: Strict TypeScript configuration
- **Conventional Commits**: Enforced commit message standards
- **Pre-commit Hooks**: Quality checks before every commit

## Documentation

- **[Code Quality Setup](./docs/code-quality.md)** - Complete guide to ESLint, Prettier, and development tools
- **[Shadcn/ui Components](./docs/shadcn-ui.md)** - UI component library setup and usage guide

## Project Structure

```
├── app/                 # Next.js app directory
├── components/          # Reusable React components
│   └── ui/             # Shadcn/ui components
├── lib/                # Utility functions
├── docs/               # Documentation
├── public/             # Static assets
└── ...config files     # ESLint, TypeScript, Tailwind, etc.
```

## Getting Started with Development

1. **Clone and Setup**: Follow the installation steps above
2. **Explore the Code**: Check out the example components and pages
3. **Add Components**: Use `pnpm dlx shadcn@latest add <component>` to add UI components
4. **Customize**: Modify the Tailwind theme, add your own components
5. **Build**: The setup enforces code quality automatically through Git hooks

## Contributing

Contributions are welcome! Please ensure your code follows the established quality standards by running `pnpm code-quality` before submitting.

## License

MIT License - feel free to use this template for your projects.

---

**Perfect for**: New projects, learning modern web development, teams that value code quality and developer experience.
