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

📌 await is a keyword that can only be used inside a async function.

` await function() {} // Syntax error: await is only valid under async function.`

Q: What makes `async-await` special?
A: Let's understand with one example where we will compare async-await way of resolving promise with older .then/.catch fashion. For that we will modify our promise p.

```js
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value!!");
    }, 3000);
});

// Let's now compare with some modification:

// 📌 Promise.then/.catch way :
function getData() {
    // JS engine will not wait for promise to be resolved
    p.then((res) => console.log(res));
    console.log("Hello There!");
}

getData();
// First `Hello There!` would be printed and then after 3 secs 'Promise resolved value!!' will be printed.
// Above happened as Javascript wait for none, so it will register this promise and take this callback function and register separately, then js will move on and execute the following console and later once promise is resolved, following console will be printed.

//❓ Problem: Normally one used to get confused that JS will wait for promise to be resolved before executing following lines.

// 📌 async-wait way:
async function handlePromise() {
    // JS Engine will waiting for promise to resolve.
    const val = await p;
    console.log("Hello There!");
    console.log(val);
}
handlePromise();
// This time `Hello There!` won't be printed immediately instead after 3 secs. `Hello There!` will be printed followed by 'Promise resolved value!!'
// 💡 So basically code was waiting at `await` line to get the promise resolve before moving on to next line.

// Above is the major difference between Promise.then/.catch vs async-await

//🤓 Let's brainstorm more around async-await
async function handlePromise() {
    console.log("Hi");
    const val = await p;
    console.log("Hello There!");
    console.log(val);

    const val2 = await p;
    console.log("Hello There! 2");
    console.log(val2);
}
handlePromise();
// In above code example, will our program wait for 2 time or will it execute parallely.
//📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise resolved value!!') will get printed immediately.

// Let's create one promise and then resolve two different promise.
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value by p2!!");
    }, 2000);
});

async function handlePromise() {
    console.log("Hi");
    const val = await p;
    console.log("Hello There!");
    console.log(val);

    const val2 = await p2;
    console.log("Hello There! 2");
    console.log(val2);
}
handlePromise();
// 📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise resolved value by p2!!') will get printed immediately. So even though `p2` was resolved after 2 secs it had to wait for `p` to get resolved

// Now let's reverse the order execution of promise and observe response.
async function handlePromise() {
    console.log("Hi");
    const val = await p2;
    console.log("Hello There!");
    console.log(val);

    const val2 = await p;
    console.log("Hello There! 2");
    console.log(val2);
}
handlePromise();
// 📌 `Hi` printed instantly -> now code will wait for 2 secs -> After 2 secs ('Hello There!' 'Promise resolved value by p2!!') will get printed and in the subsequent second i.e. after 3 secs ('Hello There! 2' 'Promise resolved value!!') will get printed
```
