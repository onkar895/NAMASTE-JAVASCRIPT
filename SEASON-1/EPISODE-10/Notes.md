## Lexical Scoping :

-   **Lexical scope** is the ability for a **function scope** to access variables from the **parent scope**.
-   Lexical scope describes how nested (also known as "child") functions have access to variables defined in parent scopes.
-   JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent.
-   An inner function can access variables which are in outer functions even if inner function is nested deep.

### Example 1 :

```js
function x() {
    var a = 17;
    function y() {
        // so here we can say that y() is lexically present inside x()
        console.log(a);
    }
    y();
}
x(); // so here we can say that x() is lexically present inside Global Execution
```

-   x() creates a local variable called 'a' and a function called y().
-   The y() function is an inner function that is defined inside x() and is available only within the body of the x() function.
-   Note that the y() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, y() can access the variable name declared in the parent function, x().

### Example 2 :

```js
const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
        console.log((myValue += 1));
    };

    childFunction();
};

myFunction();
```

-   In this example, childFunction has access to the variable myValue which is defined in the parent scope of myFunction.
-   The lexical scope of childFunction allows access to the parent scope.

## Closures in JS :

-   A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
-   In simple words, Function along with its lexical scope bundled together forms **closure**.
-   In other words, a **closure** gives you access to an **outer function's scope** from an **inner function**.
-   In JavaScript, **closures** are created every time a function is created, at function creation time.
-   A **closure** is a feature of JavaScript that allows inner functions to access the outer scope of a function.

-   JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent.
-   See Below code, Over here function displayName() along with its lexical scope i.e. (function makeFunc) would be called a **closure**.

### Example 1 :

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

### Example 2 :

```js
const myFunction2 = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction2 = () => {
        console.log((myValue += 1));
    };

    return childFunction2;
};

const result = myFunction2();
console.log(result);
result();
result();
result();
```

-   In this revision, myFunction returns childFunction instead of calling it.

-   Therefore, when result is set equal to myFunction(), the console statement inside myFunction is logged, but not the statement inside childFunction.

-   childFunction is not called into action.

-   Instead, it is returned and held in result.

-   In addition, we need to realize that myFunction has closed after it was called.

-   The line with console.log(result) should show in the console that result now holds the anonymous function value that was childFunction.

-   Now, when we call result(), we are calling the anonymous function that was assigned to childFunction.

-   As a child of myFunction, this anonymous function has access to the myValue variable inside myFunction even after it has closed!

-   The closure we created now allows us to continue to increase the value of the myValue variable every time we call result().

### Example 3 :

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
