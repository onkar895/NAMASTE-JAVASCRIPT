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
