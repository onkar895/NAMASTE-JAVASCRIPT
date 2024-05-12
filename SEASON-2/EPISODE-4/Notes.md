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
// `await` is a keyword that is used inside an async function to pause the execution of the function until a promise is resolved.
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

**Que: Question is Is program actually waiting or what is happening behind the scene?**

`Ans: As we know, Time, Tide and JS wait for none. And it's true. Over here it appears that JS engine is waiting but JS engine is not waiting over here. It has not occupied the call stack if that would have been the case our page may have got frozen. So JS engine is not waiting. So if it is not waiting then what it is doing behind the scene? Let's understand with below code snippet.`

```js
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value by p1!!");
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value by p2!!");
    }, 10000);
});

async function handlePromise() {
    console.log("Hi");
    debugger;
    const val = await p;
    console.log("Hello There!");
    debugger;
    console.log(val);

    const val2 = await p2;
    console.log("Hello There! 2");
    debugger;
    console.log(val2);
}
handlePromise();

// When this function is executed, it will go line by line as JS is synchronous single threaded language.

// Lets observe what is happening under call-stack. Above you can see we have set the break-points.

// call stack flow -> handlePromise() is pushed into the call stack -> It will log `Hi` to console.
// Next, it sees we have await keyword, where promise is suppose to be resolved -> So will it wait for promise to resolve and block call stack?
// The answer is No -> this handlePromise() execution get suspended and moved out of call stack -> So when JS sees await keyword it suspend the execution of function till promise is resolved -> So `p` will get resolved after 5 secs so that's why handlePromise() will be pushed to call-stack again after 5 secs.
// -> But this time it will start executing from where it had left.
// -> Now it will log 'Hello There!' and 'Promise resolved value!!'
// -> then it will check whether `p2` is resolved or not.
//  -> It will find since `p2` will take 10 secs to resolve so the same above process will repeat
// -> execution will be suspended until promise p2 is resolved.

// 📌 Thus JS engine is not waiting here, call stack is not getting blocked.

// Moreover in above scenario what if p1 would be taking 10 secs and p2 5 secs -> even though p2 got resolved earlier but JS is synchronous single threaded language so it will first wait for p1 to be resolved and then will immediately execute all.
```

### Error Handling :

While we were using normal Promise we were using .catch to handle error, now in async-await we would be using try-catch block to handle error.

```js
const handleinfo = async () => {
    try {
        const data = await fetch("https://dummyjson.com/products");
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

handleInfo();

// fetch () => fetch function is basically a promise so when this prmomise is resolved the fetch function gives you the response object and this response object has a body which is a readableStream.
// and suppose you want to convert this readableStream to json you will have to do '.json()'.
// and this '.json()' is again a promise. and when this prmise also gets resolved thuis gives you the final result or data.

// In above example, whenever any error will occur the execution will move to catch block. One could try above with bad url which will result in error.

// Other way of handling error :
handleInfo().catch((err) => console.log(err));
// this will work as handlePromise will return error promise in case of failure.
```
