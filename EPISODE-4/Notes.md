## How functions work in JS & Variable Environment :

```js
var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen
in Hoisting.
console.log(x);
function a() {
 var x = 10; // local scope because of separate execution context
 console.log(x);
}
function b() {
 var x = 100;
 console.log(x);
}
```

### Code Flow in terms of Execution Context :

-   The Global Execution Context (GEC) is created (the big box with Memory and Code subparts). Also GEC is pushed
    into Call Stack.

```
Call Stack : GEC
```

-   In first phase of GEC (memory phase), variable x:undefined and a and b have their entire function code as value
    initialized
-   In second phase of GEC (execution phase), when the function is called, a new local Execution Context is created.
-   After x = 1 assigned to GEC x, a() is called. So local EC for a is made inside code part of GEC.

```
Call Stack: [GEC, a()]
```

-   For local EC, a totally different x variable assigned undefined(x inside a()) in phase 1 , and in phase 2 it is assigned
    10 and printed in console log.
-   After printing, no more commands to run, so a() local EC is removed from both GEC
    and from Call stack.

```
Call Stack: GEC
```

-   Cursor goes back to b() function call. Same steps repeat.

```
Call Stack :[GEC, b()] -> GEC (after printing yet another totally different x value as 100 in console log)
```

-   Finally GEC is deleted and also removed from call stack. Program ends.

### Explaination :

-   The code begins with the declaration `var x = 1;`. This creates a variable `x` in the global execution context with the initial value of `1`.
-   Next, we encounter the function invocation `a();`. Since functions in JavaScript create their own execution contexts, a new execution context is created for the function `a()`.
-   Within the execution context of `a()`, we see the declaration `var x = 10;`. This creates a separate variable `x` with the initial value of `10` in its own variable environment (Memory Component), which is scoped locally within the function `a()`.
-   The statement `console.log(x);` within `a()` outputs the value of the local `x`, which is `10`.
-   After `a()` finishes executing, its execution context is popped off the call stack, and we return to the global execution context.
-   The function invocation `b();` is encountered. Similar to `a()`, a new execution context is created for `b()`.
-   Within the execution context of `b()`, we have the declaration `var x = 100;`, creating a separate variable `x` with the value `100` within the local scope of `b()`.
-   The statement `console.log(x);` within `b()` outputs the value of the local `x`, which is `100`.
-   Once `b()` completes execution, its execution context is popped off the call stack, and we return to the global execution context.
-   Finally, we encounter the statement `console.log(x);` within the global scope. Since there is no local `x` variable in this scope, JavaScript accesses the global `x` variable declared earlier, which has a value of `1`.
-   The value of `x` is outputted as `1` to the console.

-   ![Reference-Image](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DGoh2eLn6nzskdQb9rHWxQ.jpeg)
