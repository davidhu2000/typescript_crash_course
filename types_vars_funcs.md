# Types, Variables, and Functions

```ts
let str : string = 'Hello';
let num : number = 5;
let boo : boolean = true;
```

We are telling the compiler the type of each variable is. If we try to assign

```ts
str = 5;
```

We would get an error:

> Type 'number' is not assignable to type 'string'.

## Arrays

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

    let comPlex = { name: 'Hello', surname: 'World' };

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

### Functions

```ts
function combine(a: string, b: string) : string {
  return `${a}${b}`;
}
```

This function is a function that returns a string, takes two arguments, both of which are strings.

### Anonymous functions

```ts
let combine = function(a: string, b: string) : string {
  return `${a}${b}`;
}
```

This is another way of writing methods.

### Optional Parameters

```ts
function someFunc(a: string, b: string, c?: string) {
  return a + b + c;
}
```

This function will return the proper result we called it

    someFunc('Hello', 'World'); // "HelloWorld"

### Default Parameters

```ts
function someFunc(a: string, b: string, c: string = 'no') {
  return a + b + c;
}
```

This will have `c` default to `no` if it is not passed in.

### Rest Parameters

```ts
function someFunc(...args: string []) : string{
  return args.join('');
}
```

Rest parameters allows function to collect the arguments in an array.

### Function callbacks

```ts
function someFunction(str: string, callback: (str: string) => void) {
    console.log('Running function');
    callback(str);
}
```

Here the function `someFunction` is created with a string and a fucntion argument. We specified that the callback takes a string argument. We use the `() =>` syntax to indicate that the callback is a function. The `void` keyword denotes that the function does not return a value.

We can call the function like so:

    someFunction('test', cbFunction);

We are defining a callback function signature, so if the function passed in does not match the signature, the compiler will throw an error.

### Function overloads

Since JavaScript is a dynamic language, we often want to call a function using different argument types. To account for this in TypeScript, we can use a specific synatx, called function overloads.

```ts
function canMath(x: string, y: string): string;
function canMath(x: number, y: number): number;
function canMath(x: any, y: any): any {
  return x + y;
}

add(1,1)      // returns 2;
add('1','1')  // returns "11";
```

We specific a function overload signature that takes two strings and returns a string.
Then we specify another overload signature take takes two numbers and returns a number.

To over the function, we need to use the exact syntax as above:

- Write the function signatures without the function body.
- Write the function with body, and **make sure to use the type specifier of `any`**. Or else, the compiler will throw an error.

Even though we are using `any` as the type specifier for the function, this is essentially hidden by this convention. We are limiting this function to only take two strings or two numbers.

    canMath(true, true)

This will cause an error.

### Union Types

Allows us to express a type as the combination of of two or more types.

    let union : string | number;
    union = 'hello';
    union = 42;

This is valid and will not cause any compiler error.

### Type guards

If we use union types as type specifiers for our function, the compiler will throw an error. It cannot tell what type an argument is.

For example,

```ts
function noGuard(arg1: string | number, arg2: string | number) : string | number {
  return arg1 + arg2;
}
```

Type guards are expressions that perform a check on the type.

```ts
function withGuard(arg1: string | number, arg2: string | number) : string | number {
  if (typeof arg1 === 'string') {
    // perform logic
  }
  if (typeof arg === 'number1' && typeof arg2 === 'number') {
    // perform logic with numbers
  }

  // default case
  return arg1.toString() + arg2.toString();
}
```

This allow use to handle all possible scenarios.

### Type aliases

We can create aliases for union types.

```ts
type StringOrNumber = string | number;

function add(arg1: StringOrNumber, arg2: StringOrNumber) : string {
  return arg1.toString() + arg2.toString();
}
```

We can also create aliases for function signatures

```ts
type CallbackWithString = (string) => void;

function func(callback: CallbackWithString) {
  // logic stuff
}
```

### Null and undefined

Any argument that is not passed in as part of the function call is `undefined` in JavaScript. However, TypeScript can guard against that.

```ts
function doNothing(arg: null | number) : void {
  console.log('success');
}
doNothing(); // will cause a compiler error.
```

> Supplied parameters do not match any signature of call target.

WE can allow for `undefined` by creating an union with `undefined`.

    let x : number | undefined;

If we try to assign `x = null;`, we will get a compiler error.

## Object rest and spread

TypeScript allows for rest and spread operators for objects.

For example,

```ts
let original = { name: 'Type', goodness: 10 };
let copycat = { ...original };

copycat.name === 'Type';
copycat.goodness === 10;
```

We can also use the operator for multiple objects,

```ts
copycat = { ...original, ...anotherCopy };
```

Note: the properties are copied incrementally. So, if two objects have the same property with the same name, the object property that was specified last will take precedence.
