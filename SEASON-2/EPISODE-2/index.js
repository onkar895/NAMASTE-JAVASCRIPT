// Promises :

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

// How to Use the Promise.all Method: 

// The Promise.all() method takes an array of promises as input and returns a single promise that is fulfilled 
// when all input promises have been fulfilled. It can be useful when you wait for multiple promises to be resolved before taking action.
let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1')
let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2')
let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3')
// Here, promise1, promise2, and promise3 are promises that are fetching data from three different URLs.

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values)
  })
