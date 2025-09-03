# Eric Maicon - Portfolio

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Modern portfolio website built with React, TypeScript, and Tailwind CSS, featuring a clean design and smooth animations.

## 🚀 Features

- ⚡️ Blazing fast with Vite
- 🎨 Styled with Tailwind CSS
- 🛠 TypeScript for type safety
- 🧪 Comprehensive test coverage with Jest
- 🧹 Code quality with ESLint and Prettier
- 🐶 Husky pre-commit hooks
- 📝 Conventional commits with Commitizen
- 🤖 Automated releases with semantic-release

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Git Hooks**: Husky
- **Commit Standard**: Conventional Commits
- **UI Components**: Radix UI, shadcn/ui
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ericmaicon/ericmaicon.git
   cd ericmaicon
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run commit` - Interactive commit using Commitizen

## 🧪 Testing

This project uses Jest and React Testing Library for testing. To run tests:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 🧹 Code Quality

### Linting

ESLint is used for code linting. Run the linter with:

```bash
npm run lint
```

## 🐶 Git Hooks

This project uses Husky for Git hooks. The following hooks are configured:

- **pre-commit**: Runs linting and tests on staged files
- **commit-msg**: Validates commit message format

## 📝 Commit Messages

This project uses Conventional Commits specification. Use the following format for commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Example:

```
feat: add user authentication

description of changes

Closes #123
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

## 🤖 Automated Releases

This project uses semantic-release for automated version management and package publishing. The following commit message conventions determine the version bump:

- `fix`: patch release (1.0.0 -> 1.0.1)
- `feat`: minor release (1.0.0 -> 1.1.0)
- `BREAKING CHANGE`: major release (1.0.0 -> 2.0.0)

## 📄 License

MIT © [Eric Maicon](https://github.com/ericmaicon)

---

<div align="center">
  Made with ❤️ using modern web technologies
</div>
