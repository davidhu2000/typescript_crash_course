# Interfaces, Classes

## Interfaces

An interface gives us a way to define what properties and methods an object must have. It is a compile-time language feature of TypeScript. The compiler does not generate any JavaScript code; it is only used by the compiler for type checking during compilation.

```ts
interface IRandom {
  id: number;
  name: string;
}

let Random : IRandom = { id: 1, name: 'random' };
```

We are saying that this object must have the `id` and `name` properties. If we try to create an instance of `IRandom` without both, the compiler will throw an error.

### Optional properties

We can denote that a property is optional via `?`.

```ts
interface IOptional {
  id: number;
  name?: string;
}

let optionalObj : iOptional = { id: 1 };
```

This will not cause an error.

## Classes

A class is a definition of an object, what data it holds, and what methods it has.

```ts
class Simpleton {
  id: number;
  doSomething() : void {
    console.log('something');
  }
}

let mySimpleton = new Simpleton();
mySimpleton.doSomething();
```

Here we created a new instance of the class using the `new` keyword.

### Implementing interfaces

We can create interfaces to describe the class's structure.

```ts
interface IRobot {
  hasError();
}

class Type2 implements IRobot {
  hasError() {
    return 'perfection in design.';
  };
}

function checkError(obj : IRobot) {
  console.log(obj.hasError());
}

let type2 = new Type2();
checkError(type2);
```

The `checkError` function requires an argument with the attributes described in `IRobot`. We can use `implements` to ensure the class we created has the necessary properties.

### Class constructors

Classes can accept variables during initial construction. Here is an example of one such class written in TypeScript

```ts
class SmartPhone {
  brand: string;
  version: number;
  constructor(brand: string, version: number) {
    this.brand = brand;
    this.version = version;
  }
}

let phone = new SmartPhone('apple', 7);
```

We can create more complex classes. See example [here](examples/class_example.ts).

### Interface function definitions

We can implement functions inside of interfaces.

```ts
interface IComplex {
  name: string;
  normalFunction(arg: string) : string;
  optionalArgument(arg?: string);
  defaultArgument(arg?: string);
  restOperator(...args: string[]);
  callbackFunc(callback: (arg: number) => string);
}
```

Since we can not assign values in an interface, we have to use `?` for the default argument function and leave the assignment of the value to the class implementation.

We do not declare a signature for the `constructor` inside interface. This will cause a compiler error, because the type of the constructor is implicitly typed.

### Class Modifiers

- A `public` class property can be accessed by any calling code.

```ts
class Strangers {
  public title: string;
}

let strangerThings = new Strangers();
strangerThings.title = 'Stranger Things';
```

- A `private` class property cannot be access outside the class

```ts
class Strangers {
  private cost: number;
}

let strangerThings = new Strangers();
strangerThings.cost = 10000000;
```

This will cause an error:

> Property 'cost' is private and only accessible within class `Stranger`.

Class functions are `public` by default.

// TODO: Add notes about `protected`

### Constructor shorthand

We can specify the types inside the arguments for the constructor. This is a shorthand.

```ts
class LongCon {
  public id: number;
  private name: string;
  constructor(id, name) {
    // logic stuff
  }
}
```

The above class can be shortened as:

```ts
class ShortCon {
  constructor(public id: number, private name: string) {
    // logic stuff
  }
}
```

This shorthand syntax is available only within the `constructor` function.

### Readonly properties

This means that after the value is set, it cannot be modified. The `readonly` property can only be set within the `constructor` function.

```ts
class NoWriteAllowed {
  readonly name: string;
  constructor(name : string) {
    this.name = name;
  }
}
```

Trying to set the value of `name` to something else will cause a compiler error.

### Class property accessors

An accessor is a function that is called when a user either sets or gets a property. We can use those functions to detect when a user gets/sets any value the class.

```ts
class AccessExample {
  private id: number;
  get id() {
    return this.id;
  }
  set id(value: number) {
    this.id = value;
  }
}
```

Using getter and setter allow us to execute code when these properties are accessed.

Note: This feature is only available ECMAScript 5 and above.

## Static Functions

Static functions are functions that can be called on a class without having to create an instance of the class first.

```ts
class StaticExample {
  static printHello() {
    console.log('Hello');
  }
}

StaticExample.printHello();
```

## Static Properties

If a property of a class is marked as static, then each instance of this class will share the same static property.

```ts
class StaticProperty {
  static count = 0;
  updateCount() {
    StaticProperty.count++;
  }
  readCount() {
    return StaticProperty.count;
  }
}

let first = new StaticProperty();
let second = new StaticProperty();

first.updateCount();
console.log(StaticProperty.count); // prints 1

second.updateCount();
console.log(StaticProperty.count); // prints 2

console.log(first.readCount()); // prints 2
console.log(second.readCount()); // prints 2
```

## Namespaces

We can use namespaces to deal with the situation when two classes share the same name, which will cause a compiler error.

```ts
namespace NameSpace {
  class One {
  }
  export class Two {
    name: string;
  }
}

let nsInstance = new NameSpace.Two();
```

We cannot create a new instance of the `One` class, because it is not exported from the namespace. Now, we can create new namespaces with the class name of `Two`, and there will not be any compiler errors.
