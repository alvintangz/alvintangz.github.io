<div align="center">
    <h1>Alvin Tang - Personal Website</h1>
</div>

<p align="center">
    <strong>Personal website with my journey, hobbies, and contact details.</strong>
</p>

<div align="center">
    <a href="https://nodejs.org/">
        <img alt="Node v20.10.0" src="https://img.shields.io/badge/node-v20.10.0-green.svg">
    </a>
    <a href="https://prettier.io/">
        <img alt="Code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
    </a>
    <a href="https://eslint.org/">
        <img alt="Code linter: eslint" src="https://img.shields.io/badge/code%20linter-eslint-4b32c3?style=flat">
    </a>
</div>

## Installation and Setup

### Prerequisties

#### Node.js and NPM

```bash
# These instructions assume you have a MacOS

# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm use

# Verify the Node.js version:
node -v # Should print "v20.10.0".

# Verify NPM is installed
npm -v
```

### Initialize and start the app

1. Install code dependencies: `npm install`
2. Start the app: `npm run start`
3. Go to [`http://localhost:5173`](http://localhost:5173)

## Scripts

In the project directory, you can run

### `npm run dev`

Runs the app in development mode.\
Open [`http://localhost:5173`](http://localhost:5173) to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs ESLint to analyze your code for potential errors and enforce consistent styling.

- Use `npm run lint:fix` to fix any problems that are fixable.
