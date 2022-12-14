## mcc-sdk@0.1.0

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment

- Node.js
- Webpack
- Browserify

Language level

- ES5 - you must have a Promises/A+ library installed
- ES6

Module system

- CommonJS
- ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:

```
pnpm install
pnpm run build
```

### Publishing

A new tag should be created after a push to main. See [gh-action-bump-version](https://github.com/phips28/gh-action-bump-version).

To publish to NPM, go to Github and create a release there with the latest tag.

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
pnpm add @mach-composer/mcc-sdk
```
