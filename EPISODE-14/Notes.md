## Callback Functions in JS ft. Event Listeners:

-   In JavaScript,a callback function is a function that is passed into another function as an argument.
-   This function can be invoked at a later stage of time.

-   Functions are first class citizens ie. take a function A and pass it to another function B. Here, A is a callback function. So basically I am giving access to function B to call function A. This callback function gives us the access to whole Asynchronous world in Synchronous world.

```js
setTimeout(function () {
    console.log("Timer");
}, 1000); // first argument is callback function and second is timer.
```

-   JS is a synchronous and single threaded language. But due to callbacks, we can do async things in JS.

```js
setTimeout(function () {
    console.log("timer");
}, 5000);
function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
});
// x y timer
```

-   Explaination :

    -   In the call stack, first x and y are present. After code execution, they go away and stack is empty. Then after 5 seconds (from beginning) anonymous suddenly appear up in stack ie. setTimeout.
    -   All 3 functions are executed through call stack. If any operation blocks the call stack, its called blocking the main thread.
    -   Say if x() takes 30 sec to run, then JS has to wait for it to finish as it has only 1 call stack/1 main thread. Never block main thread.
    -   Always use async for functions that take time eg. setTimeout

```js
// Another Example of callback
function printStr(str, cb) {
    setTimeout(() => {
        console.log(str);
        cb();
    }, Math.floor(Math.random() * 100) + 1);
}
function printAll() {
    printStr("A", () => {
        printStr("B", () => {
            printStr("C", () => {});
        });
    });
}
printAll(); // A B C // in order
```

### Event Listener :

-   We will create a button in html and attach event to it.

```js
// index.html
<button id="clickMe">Click Me!</button>;

// in index.js
document.getElementById("clickMe").addEventListener("click", function xyz() {
    //when event click occurs, this callback function (xyz) is called into callstack
    console.log("Button clicked");
});
```
