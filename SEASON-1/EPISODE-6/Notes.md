## undefined vs not defined in JS :

### Memory Allocation in JavaScript :

-   JavaScript allocates memory to **variables and functions** before executing any code.
-   Even before a line of code is run, memory space is **reserved** for variables.
-   **undefined** is a primitive value automatically assigned to variables that have been declared but have not been initialized with a value.
-   The value of a variable that hasn't been assigned is **undefined**.
-   **undefined** acts as a placeholder or default value in memory until a variable is assigned a different value.

### Difference between undefined and not defined :

-   **undefined** means that memory has been allocated to a variable but no value has been assigned yet.
-   **not defined** refers to a variable that has not been declared or allocated any memory.

### undefined vs Empty :

-   **undefined** is not equivalent to **empty or null**.
-   It is a **special keyword** in JavaScript that takes up its own memory space.
-   **undefined** is a placeholder until a value is assigned to a variable.

### Examples of undefined :

```js
// Example 1
var a; // Memory is allocated for 'a', but no value is assigned yet
console.log(a); // Output: undefined

// Example 2
var x;
console.log(x); // Output: undefined

// It represents the absence of a value.
let arr = [1, 2, , 4]
console.log(arr[2]) // undefined because of empty array at index 2

// not defined :
-  **not defined** means we haven't yet defined anything.
-  **not defined** typically refers to a situation where a variable or identifier has not been declared or is out of scope.
// Example 3
console.log(y); // Output: ReferenceError: y is not defined
```

-   JS is a **loosely typed / weakly typed** language.
-   It doesn't attach variables to any datatype.
-   We can say var b = 100, and then change the value to boolean a = true or string a = 'hello world' later on.

```js
var a;
console.log(a); // undefined
a = 100;
console.log(a); // 100
a = "hello world";
console.log(a); // hello world
```

-   Never assign undefined to a variable manually. Let it happen on it's own accord.
