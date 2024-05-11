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

Q: How we can use await along with async function?
A: async and await combo is used to handle promises.

But Question is how we used to handle promises earlier and why we even need async/await?

```js
// Using (previous) .then method :
const p = new Promise((resolve, reject) => {
    resolve("Promise resolved value!!");
});

function getData1() {
    p.then((res) => console.log(res));
}

getData1();

// 📌 Till now we have been using Promise.then/.catch to handle promise.

// Now let's see how async await can help us and how it is different
// The rule is we have to use keyword await in front of promise.

// Using Async-Await :
const handlePromise = async () => {
    const val = await p;
    console.log(val);
};

handlePromise();
```
