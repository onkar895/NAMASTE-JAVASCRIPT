## Promises :

**`Promises are used to handle async operations in JavaScript.`**

We will discuss with code example that how things used to work before Promises and then how it works after Promises

Suppose, taking an example of E-Commerce

```js
const cart = ["shoes", "pants", "kurta"];

// Below two functions are asynchronous and dependent on each other
const orderId = createOrder(cart);
proceedToPayment(orderId);

// with Callback (Before Promise)
// Below here, it is the responsibility of createOrder function to first create the order then call the callback function
createOrder(cart, function () {
    proceedToPayment(orderId);
});
// Above there is the issue of `Inversion of Control`
```

Q: How to fix the above issue?
A: We can fix this issue using **Promise.**

-   Now, we will make **createOrder** function return a promise and we will capture that promise into a variable.

-   Promise is nothing but we can assume it to be empty object with some data value in it, and this data value will hold whatever this createOrder function will return.

-   Since createOrder function is an async function and we don't know how much time will it take to finish execution.

-   So the moment createOrder will get executed, it will return you a undefined value. Let's say after 5 secs execution finished so now orderId is ready so, it will fill the undefined value with the orderId.

-   In short, When createOrder get executed, it immediately returns a promise object with undefined value.
-   Then javascript will continue to execute with other lines of code.
-   After sometime when createOrder has finished execution and orderId is ready then that will automatically be assigned to our returned promise which was earlier undefined.

Q: Question is how we will get to know **response** is ready?
A: So, we will attach a **callback function** to the **promise** object using then to get triggered automatically when result is ready.
