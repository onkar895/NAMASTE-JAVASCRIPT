## async await :

-   Topics Covered

    -   What is async?
    -   What is await?
    -   How async await works behind the scenes?
    -   Example of using async/await
    -   Error Handling
    -   Interviews
    -   Async await vs Promise.then/.catch

**Que:** What is `async-await`?

-   `Async/Await` is a feature that allows you to write asynchronous code in a more synchronous, readable way.
-   `Async/Await` is a powerful tool for handling asynchronous operations. It allows for more readable and maintainable code by eliminating the need for callbacks and providing a more intuitive way to handle asynchronous operations.
-   `async` is a keyword that is used to declare a function as asynchronous.
-   `await` is a keyword that is used inside an async function to pause the execution of the function until a promise is resolved.

**Que:** What is async function and how it is different from normal function?

```js
// 💡 async function always returns a promise, even if I return a simple string from below function, async keyword will wrap it under Promise and then return.
async function getData() {
    return "Namaste JavaScript";
}
const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}

//❓How to extract data from above promise? One way is using promise .then
dataPromise.then((res) => console.log(res)); // Namaste JavaScript
```

**Another example where async function is returning a Promise** :

```js
const p = new Promise((resolve, reject) => {
    resolve("Promise resolved value!!");
});

async function getData() {
    return p;
}
// In above case, since we are already returning a promise async function would simply return that instead of wrapping with a new Promise.
const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: 'Promise resolved value!!'}
dataPromise.then((res) => console.log(res)); // Promise resolved value!!
```
