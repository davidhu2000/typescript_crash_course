# Generics

Generics provide a technique for writing routines where the exact type of an object used is not known until runtime. Generics are a way of writing code that will deal with any type of a object but still maintain the object type integrity.

## Generic Syntax

```ts
class CombineInator<T> {
  combineArray(inputArray : Array<T>) : string {
    let result = '';

    for (let i = 0; i < inputArray.length; i++) {
      if (i > 0) result += ',';
      result += inputArray[i].toString();
    }
    return result;
  }
}
```

The `<T>` syntax is used to indicate a generic type, and the name used for this generic type is `T`. The `combineArray` function also uses the generic type, meaning that `inputArray` must be an array of the type that was used to construct an instance of this class.
