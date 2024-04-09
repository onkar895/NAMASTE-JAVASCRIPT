## Callback Functions in JS ft. Event Listeners:

-   In JavaScript,a callback function is a function that is passed into another function as an argument.
-   This function can be invoked at a later stage of time.

-   Functions are first class citizens ie. take a function A and pass it to another function B. Here, A is a callback function. So basically I am giving access to function B to call function A. This callback function gives us the access to whole Asynchronous world in Synchronous world.

```js
setTimeout(function () {
    console.log("Timer");
}, 1000); // first argument is callback function and second is timer.
```
