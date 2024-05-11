// Creating a Promise, Chaining & Error Handling :

const cart = ['shoes', 'pants', 'kurta']

const promise = createOrder(cart)
console.log(promise)

promise.then(function (orderId) {
  console.log(orderId)
// proceedToPayment(orderId)
}).catch(function (err) {
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

function validateCart (cart) {
  return false
}
