# Interfaces, Classes, Inheritance

## Interfaces

An interface gives us a way to define what properties and methods an object must have. It is a compile-time language feature of TypeScript. The compiler does not generate any JavaScript code; it us only used by the comiler for type checking during compliation.

```ts
interface IRandom {
  id: number;
  name: string;
}

let Random : IRandom = { id: 1, name: 'random' };
```

We are saying that this object must have the `id` and `name` properties. If we try to create an instance of `IRandom` without both, the compiler will throw an error. 

### Optional properties

We can denote that a property is option via `?`.

```ts
interface IOptional {
  id: number;
  name?: string;
}

let optionalObj = { id: 1 };
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