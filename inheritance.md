# Inheritance

Inheritance means that an object uses another object as the base type, and inherits all of the base object's properties. Both interfaces and classes can use inheritance. Inheritance in TypeScript is implemented using `extends`.

## Interface inheritance

```ts
interface IBase {
  id: number;
}

interface IChild extends IBase {
  name: string;
}

class InheritingClass implements IChild {
  id: number;
  name: string;
}
```

The `IBase` only has the `id` property. `IChild` inherits from `IBase` and, therefore, also has the `id` property. The `InhertingClass` will also have the `id` and the `name` properties.

## Class Inheritance

We use similar syntax for class inheritances.

```ts
class Base implements IBase {
  id: number;
}

class Child extends Base implements IChild {
  name: string;
}
```

`Child` class already inherits the `id` property from `Base`. Since `Child` implements the `IChild` interface, it only needs to include the definition of the `name` property.

## Multiple Inheritances

TypeScript does not support multiple inheritances. Any class can only have a single base class. However, a class can implement multiple interfaces.

```ts
interface IFirst {
  id: number;
}
interface ISecond {
  name: string;
}
class Multi implements IFirst, ISecond {
  id: number;
  name: string;
}
```

## The `super` keyword

When both the base class and the inheriting class have the same function name, most commonly seen with the `constructor` function. The inheriting class need to call the base class constructor and pass through some arguments. This is called constructor overloading. The `super` keyword is used to call a base class's function with the same name.

```ts
class Base {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}

class Child extends Base {
  private name: string;
  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}
```

In the code above, the child constructor calls `super(id)` to call the base constructor and sets the `id` property.

### Function overloading

We can use the `super` keyword for any function in the child class that has the same name as the parent.

```ts
class Base {
  public id: number;
  getProperties() : string {
    return `id is ${id}`;
  }
}

class Child {
  public name: string;
  getProperties() : string {
    return `id is ${super.getProperties()}, name is ${this.name}`;
  }
}
```

In this example, the child class calls the `getProperties` from the base class inside of its own `getProperties` method.

## Protected class members

`protected` allows the class and classes that inherit from that class to have access to the properties.

```ts
class Base {
  protected id: number;
}

class Child extends Base {
  constructor() {
    super();
    this.id = 0;
  }
}
```

In this scenario, the `Child` class has access to the `id` property from the `Base` Class.

If we try to access the `id` property from outside the class, we will get an error:

> Property 'id' is protected and only accessible within class 'Child' and its subclasses.

## Abstract Class

An abstract class is a definition of call that cannot be instantiated. It is a class that is designed to be inherited from. Abstract classes are used to allow for code resuse among a group of similar objects.

For example,

```ts
class Steelers {
  public division: string;
  public wins: number;
  public losses: number;
  printDetails() : void {
    console.log(`Wins: ${this.wins}, Losses: ${this.losses}`);
  }
}

class Cowboys {
  public division: string;
  public wins: number;
  public losses: number;
  public owner: string;
  printDetails() : void {
    console.log(`Wins: ${this.wins}, Losses: ${this.losses}, Owner is ${this.owner}.`);
  }
}
```

Both classes are similar in structure, except `Cowboys` has an extra property. We can use an abstract class to avoid duplicate codes.

```ts
abstract class NflTeam {
  public id: number;
  public name: string;
  abstract getDetails(): string;
  public printDetails() {
    console.log(this.getDetails());
  }
}

class Steelers extends NflTeam {
  getDetails(): string {
    return `Wins: ${this.wins}, Losses: ${this.losses}`;
  }
}

class Cowboys extends NflTeam {
  public owner: string;
  getDetails(): string {
    return `Wins: ${this.wins}, Losses: ${this.losses}, Owner is ${this.owner}.`;
  }
}
```

In our abstract class, we defined an abstract function, which means that any class that inherits from the abstract class, it must define a `getDetails` function.

## The Factory Design Pattern

The Factory Design Pattern uses a Factory class to return an intance of one of several possible classes. The factory class has one function: to create instances of different classes based on input.

To see an example of this pattern, click [here](examples/factory_design_pattern.ts).