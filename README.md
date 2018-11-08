# TypeScript Crash Course

[![Code Triagers Badge](https://www.codetriage.com/davidhu2000/typescript_crash_course/badges/users.svg)](https://www.codetriage.com/davidhu2000/typescript_crash_course)

This guide assumes you have basic knowledge of how JavaScript works, so it will not go into details with explaining certain JavaScript topics.

## TypeScript Benefits

- an extra compliation step.
- strong / static typing
- type definitions for popular JS libraries
- encapsulation - the ability to define data and a set of functions into a single component
- private / public member variable decorators.

## Installation and Basic Usage

    npm install --global typescript

This will install TypeScript as a global module, so you can use it no matter what directory you are in. You can use the command `tsc filename.ts` to compile the TypeScript file into JavaScript.

## Configuration

    tsc --init

This command will create a `tsconfig.json` file in the root of the project folder. It specifies the global TypeScript project settings and compiler options. It will create a file similar to the file below:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true
  }
}
```

This has all the comments removed, but you can checkout the complete generated `tsconfig.json` [here](examples/tsconfig.json)

You can checkout [Compiler Options] for more information.

[Compiler Options]: https://www.typescriptlang.org/docs/handbook/compiler-options.html

You can create multiple `tsconfig.json` files within the same project directory, so different sub directories will use different compiler options.

## Table of Contents

1. [types, variables, and functions](types_vars_funcs.md)
2. [interfaces and classes](interfaces_classes.md)
3. [inheritance](inheritance.md)
4. [decorators](decorators.md)
5. [generics](generics.md)
