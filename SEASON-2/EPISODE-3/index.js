const cart = ['shoes', 'pants', 'kurta']

const promise = createOrder(cart)

promise.then(function (orderId) {
  proceedToPayment(orderId)
})

function createOrder (cart) {
  const promise = new Promise(function (resolve, reject) {})
}
