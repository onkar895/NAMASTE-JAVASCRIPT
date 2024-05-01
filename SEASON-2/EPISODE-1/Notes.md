## Callback Hell :

-   There are 2 Parts of Callback:

    -   Good Part of callback - Callback are super important while writing asynchronous code in JS
    -   Bad Part of Callback - Using callback we can face issue:
        -   Callback Hell
        -   Inversion of control

-   Understanding of Bad part of callback is super important to learn Promise in next lecture.

💡 JavaScript is synchronous, single threaded language. It can Just do one thing at a time, it has just one call-stack and it can execute one thing at a time. Whatever code we give to Javascript will be quickly executed by Javascript engine, it does not wait.

```js
console.log("Namaste");
console.log("JavaScript");
console.log("Season 2");
// Namaste
// JavaScript
// Season 2

// 💡 It is quickly printing because `Time, tide & Javascript waits for none.`
```

But what if we have to delay execution of any line, we could utilize callback, How?

```js
console.log("Namaste");
setTimeout(function () {
    console.log("JavaScript");
}, 5000);
console.log("Season 2");
// Namaste
// Season 2
// JavaScript after 5 sec

// 💡 Here we are delaying the execution using callback approach of setTimeout.
```
