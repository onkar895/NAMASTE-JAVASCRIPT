// Promises :

const cart = ['shoes', 'pants', 'kurta']

// Below two functions are asynchronous and dependent on each other
const orderId = createOrder(cart)
proceedToPayment(orderId)

// with Callback (Before Promise)
// Below here, it is the responsibility of createOrder function to first create the order then call the callback function
createOrder(cart, function () {
  proceedToPayment(orderId)
})
// Above there is the issue of `Inversion of Control`

// Que: Question is how we will get to know response is ready?
// Ans: So, we will attach a callback function to the promise object using then to get triggered automatically when result is ready.
const cart1 = ['shoes', 'pants', 'kurta']

const promiseRef = createOrder(cart1)
// this promiseRef has access to `then`

// {data: undefined}
// Initially it will be undefined so below code won't trigger
// After some time, when execution has finished and promiseRef has the data then automatically the below line will get triggered.

promiseRef.then(function () {
  proceedToPayment(orderId)
})

// Callback Hell Example
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInf) {
    showOrderSummary(paymentInf, function (balance) {
      updateWalletBalance(balance)
    })
  })
})
// And now above code is expanding horizontally and this is called pyramid of doom.
// Callback hell is ugly and hard to maintain.

// 💡 Promise fixes this issue too using `Promise Chaining`
// Example Below is a Promise Chaining
createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId)
  })
  .then(function (paymentInf) {
    showOrderSummary(paymentInf)
  })
  .then(function (balance) {
    updateWalletBalance(balance)
  })

// ⚠️ Common PitFall
// We forget to return promise in Promise Chaining
// The idea is promise/data returned from one .then become data for next .then
// So,
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId)
  })
  .then(function (paymentInf) {
    return showOrderSummary(paymentInf)
  })
  .then(function (balance) {
    return updateWalletBalance(balance)
  })

// To improve readability you can use arrow function instead of regular function

// How to produce a promise :

// To create a promise, you'll have to create a new instance of the Promise object by calling the Promise constructor.
  // The constructor takes a single argument: a function called 'executor.' The "executor" function is called immediately when the promise is created, and it takes two arguments: a 'resolve' function and a 'reject' function.
  // resolve and reject are two callbacks provided by javascript engine itself.
  //  1. resolve(value): If the job is finished succesfully. 
  //  2. reject(error): If the job fails or gets an error message.

// syntax : let promise = new Promise((resolve, reject) => {})
// So basically promise takes two inbuild methods which are resolve and reject which are taken as a callback function.
let myPromise = new Promise((resolve, reject) => {

  const a = 4
  const b = 4

  setTimeout(() => {
    if (a === b) {
      resolve('The values are equal')
    }else {
      reject('The values are not equal')
    }
  }, 2000)
})

// So here in the above code the promise is still in the process that means its in the pending state. Its still not gone in the setTimeout, it's actually building right now. because the promise is in the process of checking that if this two values are equal to or not. It hasn't given us any output right now. That's why the promise right now is in the pending state. This is because nothing has been set up for the promise object yet, so it's going to sit there in a pending state forever without any value or result.
// So how you can actually resolve and reject this promise. how you will get the output, so for that we have some specific methods which are related to the promise which are resolve and reject.
// Those two methods are then and catch.
// So resolve and reject are basically execute your promise or actually to get the output you need to use two other methods which are then and catch.

// pending state
console.log(myPromise)

// fulfilled - .then method
// consuming your promises
myPromise.then((result) => {
  console.log(result) // fulfilled state
}).catch((err) => {
  console.log(err) // rejected state
}).finally(() => {
  console.log('Your promise will get setlled')
})
//  The .then method is called when a promise is fulfilled.
// and the .catch method is called when a promise is rejected.
// Once the promise is fulfilled, the .then callback method will be called with the resolved value.
// And if the promise is rejected, the .catch method will be called with an error message.
// You can also add the .finally() method, which will be called after a promise is settled.
// This means that .finally() will be invoked regardless of the status of a promise (whether resolved or rejected).
