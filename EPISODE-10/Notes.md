## Lexical Scoping :

-   **Lexical scope** is the ability for a **function scope** to access variables from the **parent scope**.
-   JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent.

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
-   In simple words, Function along with its lexical scope bundled together forms **closure**.
-   In other words, a **closure** gives you access to an **outer function's scope** from an **inner function**.
-   In JavaScript, **closures** are created every time a function is created, at function creation time.
-   A **closure** is a feature of JavaScript that allows inner functions to access the outer scope of a function.

-   JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent.
-   See Below code, Over here function displayName() along with its lexical scope i.e. (function makeFunc) would be called a **closure**.

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
-   In above code, When displayName is returned, not only is the function returned but the entire closure (fun displayName + its lexical scope) is returned and put inside myFunc. So when myFunc is used somewhere else in program, it still remembers var **'name'** inside **makeFunc()**.

### Another Example :

```js
function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z(); // 7 900
```

-   Thus In simple words, we can say:
-   A closure is a function that has access to its outer function scope even after the function has returned.
-   Meaning, A closure can remember and access variables and arguments reference of its outer function even after the function has returned.

![Reference-Image](https://alok722.github.io/namaste-javascript-notes/assets/closure.jpg)

### Advantages of Closure:

-   Module Design Pattern
-   Currying
-   Memoize
-   Data hiding and encapsulation
-   setTimeouts etc.

### Disadvantages of Closure:

-   Over consumption of memory
-   Memory Leak
-   Freeze browser
