# @dcanhanga ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

### React (with Next.js)

Install dependencies:
```
npm i -D eslint @dcanhanga/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": [
    "@dcanhanga/eslint-config/next",
    "next/core-web-vitals"
  ]
}
```

### React (without Next.js)

Install dependencies:
```
npm i -D eslint @dcanhanga/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@dcanhanga/eslint-config/react"
}
```

### Node.js

Install dependencies:
```
npm i -D eslint @dcanhanga/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@dcanhanga/eslint-config/node"
}
```
