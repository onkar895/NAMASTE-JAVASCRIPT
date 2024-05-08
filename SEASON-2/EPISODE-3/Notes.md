## Creating a Promise, Chaining & Error Handling

```js
const cart = ["shoes", "pants", "kurta"];

// Consumer part of promise :
const promise = createOrder(cart); // orderId
// Our expectation is above function is going to return me a promise.

promise.then(function (orderId) {
    proceedToPayment(orderId);
});

// Above snippet we have observed in our previous lecture itself.
// Now we will see, how createOrder is implemented so that it is returning a promise
// In short we will see, "How we can create Promise" and then return it.

// Producer part of Promise :
function createOrder(cart) {
    // JS provides a Promise constructor through which we can create promise
    // It accepts a callback function with two parameter `resolve` & `reject`
    const promise = new Promise(function (resolve, reject) {
        // What is this `resolve` and `reject`?
        // These are function which are passed by javascript to us in order to handle success and failure of function call.
        // Now we will write logic to `createOrder`
        /** Mock logic steps
         * 1. validateCart
         * 2. Insert in DB and get an orderId
         */
        // We are assuming in real world scenario, validateCart would be defined
        if (!validateCart(cart)) {
            // If cart not valid, reject the promise
            const err = new Error("Cart is not Valid");
            reject(err);
        }
        const orderId = "12345"; // We got this id by calling to db (Assumption)
        if (orderId) {
            // Success scenario
            resolve(orderId);
        }
    });
    return promise;
}
```
