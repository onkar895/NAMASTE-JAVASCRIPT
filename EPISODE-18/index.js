// Higher-Order Functions ft. Functional Programming :

function x () {
  console.log('Hello')
}

function y (x) {
  x()
}
y(x) // Hello
// So here,y is a higher order function.
// and x is a callback function.
