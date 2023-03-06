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

This project uses @changesets/cli for managing the changelog and the version. Use `pnpm changeset` to add a new
changelog item. When pushing to `main` GitHub actions will automatically create a PR to release a new version
once merged.


### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
pnpm add @mach-composer/mcc-sdk
```
