
# TypeScript Basics: Types and Variables

## Introduction to TypeScript

TypeScript is a statically typed superset of JavaScript that adds optional static typing to the language. It is designed to help developers catch errors early through a robust type system and to improve the development experience with features such as autocompletion, interfaces, and type inference.

TypeScript files use the `.ts` extension and are compiled to JavaScript to run in any JavaScript environment.

---

## Basic Types in TypeScript

TypeScript offers a rich set of built-in types to enhance the clarity and safety of your code. Below are the most common basic types:

### 1. **Boolean**
Represents a true or false value.

```typescript
let isDone: boolean = false;
```

### 2. **Number**
All numbers in TypeScript are floating-point values.

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### 3. **String**
Used to represent text data.

```typescript
let color: string = "blue";
color = 'red';

let fullName: string = `John Doe`;
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I am ${age} years old.`;
```

### 4. **Array**
Arrays can be written in two ways:

```typescript
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [4, 5, 6];
```

### 5. **Tuple**
Tuples allow you to express an array with a fixed number of elements whose types are known.

```typescript
let x: [string, number];
x = ["hello", 10];
```

### 6. **Enum**
An enum is a way of giving more friendly names to sets of numeric values.

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### 7. **Any**
`any` allows a variable to hold any type of value. Useful when dealing with dynamic content.

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
```

### 8. **Void**
Typically used as the return type of functions that do not return a value.

```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

### 9. **Null and Undefined**
By default, `null` and `undefined` are subtypes of all other types.

```typescript
let u: undefined = undefined;
let n: null = null;
```

### 10. **Never**
Represents values that never occur.

```typescript
function error(message: string): never {
    throw new Error(message);
}
```

---

## Variables in TypeScript

### Declaring Variables

Variables in TypeScript can be declared using `let`, `const`, or `var`.

- **`let`**: Block-scoped variable declaration.
- **`const`**: Block-scoped, constant variable declaration.
- **`var`**: Function-scoped variable declaration (legacy, not recommended).

```typescript
let name: string = "Alice";
const age: number = 25;
var isAvailable: boolean = true;
```

### Type Annotations

You can explicitly declare the type of a variable with a type annotation:

```typescript
let username: string;
username = "bob";
```

### Type Inference

TypeScript can automatically infer types when you assign values at declaration.

```typescript
let counter = 10; // inferred as number
```

### Best Practices for Variables

- Prefer `const` over `let` where reassignment is not needed.
- Avoid `var` unless working with legacy code.
- Always specify types explicitly when it improves code clarity.

---

## Conclusion

Understanding and using TypeScript's type system effectively enables developers to write safer, more maintainable, and more readable code. Variables and basic types are the foundation for building robust TypeScript applications.

For more advanced topics, consider exploring:
- Interfaces
- Classes
- Generics
- Type Aliases
- Advanced Types (Union, Intersection, etc.)

---

## Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)