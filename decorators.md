# Decorators

Decorators allow for the injction and query of metadata when working with class definitions. 

## Setup

In order to use decorators, a new compiler options needs to be added to the `tsconfig.json`. This option is named `experimentalDecorators` and needs to be set `true`.

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## Syntax

```ts
function simpleDecorator(constructor : Function) {
  console.log('simpleDecorator called.');
}

@simpleDecorator
class ClassWithSimpleDecorator {
  // class definitions
}
```

Here we applied the decorator to the class definition by using the `@` symbol. Running this code will produce the output:

> simpleDecorator called.

However, we did not create an instance of the class. We specified the class definition and added a decorator to it. The decorator is automatically called, so this means that decorators are applied when a class is defined, and not when it's being instantiated.

## Multiple Decorators

Multiple decorators can be applied to the same target. For example:

```ts
function secondDecorator(consturctor : Function) {
  console.log('secondDecorator called.');
}

@simpleDecorator
@secondDecorator
class ClassWithTwoDecorators {
  // class definitions
}
```

We will get an output like so

> secondDecorator called.

> simpleDecorator called.

Decorators are evaulated in the order they appear in the code, but are called in reverse order.

## Decorator Factories

A decorator factory is a wrapper function that returns the decorator. 

```ts
function decoratorFactory(name: string) {
  return function (constructor : Function) {
    console.log(`decorator function called with ${name}`);
  }
}

@decoratorFactory('testName');
class ClassWithDecoratorFactory {
  // class definitions
}
```

This will produce an output:

> decoration function called with testName

It is important to note that the decorator factory must return a function definition. The parameters defined for the decorator factory can be used within the decorator function itself.

## Class Decorator Parameters

Class decorators will be invoked with the construction function of the class that has be decoreated.

```ts
function classConstructorDecorator(constructor: Function) {
  console.log(`constructor: ${constructor}`);
}

@classConstructorDecorator
class ClassWithDecorator {
  // class definitions
}
```

The output is

> constructor: function ClassWithConstructor() { ... }

The output shows that the decorator function is being called with the `constructor` function of the class it is decorating.

We can update the decorator to modify the class properties.

```ts
function classConstructorDecorator(constructor : Function) {
  console.log(`constructor: ${constructor}`);
  console.log(`constructor.name: ${(<any>constructor).name}`);
  constructor.prototype.randomProperty = "random value";
}
```

Note: we need to cast a type of `any` to access the `name` property, since the `name` property of a function is only available from ECMAScript 6.

In this decorator, we are actually modifying the class prototype and adding a property called `randomProperty`. In this example, we modified the class definition using a decorator.

```ts
let instance = new ClassWithDecorator();
console.log(`instance.randomProperty: ${(<any>instance).randomProperty}`);
```

Here we create an instance of the class and logging the value of `randomProperty`. We need to cast the type of the variable `instance` to `any` to access the `randomProperty` property. This is because `randomProperty` is not defined on the class definition, but is injected into the class via the decorator.