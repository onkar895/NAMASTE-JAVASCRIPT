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
