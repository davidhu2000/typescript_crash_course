# TypeScript Crash Course

This summary is created based on the book "Mastering TypeScript" by Nathan Rozentals. It will cover all the basics of developing in TypeScript.

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

This has all the comments removed, but you can checkout the complete generated `tsconfig.json` [here](tsconfig.json)

You can checkout [Compiler Options] for more information.

[Compiler Options]: https://www.typescriptlang.org/docs/handbook/compiler-options.html

You can create multiple `tsconfig.json` files within the same project directory, so different sub directories will use different compiler options.

## Types

    let str : string = 'Hello';
    let num : number = 5;
    let boo : boolean = true;

We are telling the compiler the type of each variable is. If we try to assign

    str = 5;

We would get an error:

> Type 'number' is not assignable to type 'string'.

### Arrays

    let arr : number[] = [1,2,3];

For the array, we are telling the compiler we want an array of numbers. We also have `for...of` and `for...in` to iterate through arrays. 

```ts
let arr : string [] = ['What', 'is', 'up?'];

// print out 'what', 'is', 'up?'
for (let word of arr) {
  console.log(word);
}

// print out 0, 1, 2
for (let idx in arr) {
  console.log(idx);
}
```

### Inferred typing

TypeScript can infer variable type based on its first usage, then assumes the variable type based on it.

For example,

    let variable = 'string';

TypeScript will infer that `variable` is of type string.

### Duck typing

TypeScript uses duck typing for more complex variable types.

    let comPlex = { name: 'Hello', surname: 'World };

If we want to reassign the two properties,

    comPlex = { name: "Type", surname: "Script" };

The compiler will use duck typing to figure out whether or not this assignment is valid.

However, if we try:

    comPlex = { name: "Java" };

We would get an error:

> Type '{ name: string; }' is not assignable to type `{ name: string; surname: string }'.
> Propery 'surname' is missing in type '{ name: string; }'

Adding extra properties that do not exist will also cause an error.

### The `any` type

Take out previous example, if we specify `compPlex` as type `any`, the assignment will work.

    let comPlex : any = { name: "Type", surname: "Script" };
    comPlex = { name: "Java" };

The `any` keyword allows a variable to follow JavaScript's loosely defined type rules.

### Explicit casting

Any object can be cast to the type of another by using the `< >` syntax. For example,

    let comPlex = <any>{ name: "Type", surname: "Script" };
    comPlex = { name: "Java" };

This casting tells the compiler to treat the right hand side as type of `any`. This allows to assign an object with only one of the properties using the `< >` syntax.

`any` shoudl be used as sparingly as possible. Overuse can cause coding errors that are difficult to find.

### Enums

An enum associates a human-readable name for a specific number. For example,

```ts
enum Coffee {
  Cold,
  JustRight,
  Scorching
}
```

If we `console.log(Coffee.Cold)`, we will see `0` outputted in the console.

Hower, if we `console.log(Coffee[1])`, we will see `JustRight` in the console.

We can also overwrite the default values:

```ts
enum Coffee {
  Cold = 32,
  JustRight = 98,
  Scorching = 212
}
```

