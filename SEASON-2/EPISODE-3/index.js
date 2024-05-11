// Creating a Promise, Chaining & Error Handling :

const cart = ['shoes', 'pants', 'kurta']

const promise = createOrder(cart)
console.log(promise)

promise.then(function (orderId) {
  console.log(orderId)
  return orderId
})
  .catch(function (err) {
    console.log(err.message)
  })
  .then(function (orderId) {
    return proceedToPayment(orderId)
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo)
  })
  .catch(function (err) {
    console.log(err.message)
  })
  .then(function () {
    console.log('No matter what happens, I will definietely be called')
  })
  .catch(function (err) {
    console.log(err.message)
  })

function createOrder (cart) {
  const promise = new Promise(function (resolve, reject) {
    // createOrder
    // ValidateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error('Cart is not valid')
      reject(err)
    }
    // Logic for createOrder
    const orderId = '12345'
    if (orderId) {
      setTimeout(() => {
        resolve(orderId)
      }, 5000)
    }
  })

  return promise
}

function proceedToPayment (orderId) {
  return new Promise(function (resolve, reject) {
    resolve('Payment Successful')
  })
}

function validateCart (cart) {
  return true
}
