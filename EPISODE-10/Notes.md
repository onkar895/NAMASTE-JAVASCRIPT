## Lexical Scoping :

-   **Lexical scope** is the ability for a **function scope** to access variables from the **parent scope**.

```js
function x() {
    var a = 17;
    function y() {
        console.log(a);
    }
    y();
}
x();
```

-   x() creates a local variable called 'a' and a function called y().
-   The y() function is an inner function that is defined inside x() and is available only within the body of the x() function.
-   Note that the y() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, y() can access the variable name declared in the parent function, x().

## Closures in JS :

-   A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
-   In other words, a **closure** gives you access to an **outer function's scope** from an \**inner function*8.
-   In JavaScript, \**closures*8 are created every time a function is created, at function creation time.
-   A **closure** is a feature of JavaScript that allows inner functions to access the outer scope of a function.

```js
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc(); // So this myfunc variable has displayname() function inside it.
myFunc();
```

-   Running this code has exactly the same effect as the previous example of the x() function above in lexical scoping.
-   What's different (and interesting) is that the **displayName() inner function is returned from the outer function** before being executed.
