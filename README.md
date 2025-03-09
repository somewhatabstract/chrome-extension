# Chrome Extension

![build](https://github.com/somewhatabstract/chrome-extension/workflows/build/badge.svg)

Chrome extension template with PNPM, TypeScript, RSPack, React, Jest.

This is derived from [chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter).

## Prerequisites

- [node + pnpm](https://nodejs.org/) (Current Version)

## Option

- [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

- TypeScript
- RSPack
- React
- Jest
- Example Code
  - Chrome Storage
  - Options Version 2
  - content script
  - count up badge number
  - background

## Project Structure

- src/typescript: TypeScript source files
- src/assets: static files
- dist: Chrome Extension directory
- dist/js: Generated JavaScript files

## Setup

```
pnpm i
```

## Import as Visual Studio Code project

...

## Build

```
pnpm build
```

## Build in watch mode

### terminal

```
pnpm watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test

`pnpm dlx jest` or `pnpm test`
