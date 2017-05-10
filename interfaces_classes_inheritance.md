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