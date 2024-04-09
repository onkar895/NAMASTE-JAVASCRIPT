// Callback Functions :

setTimeout(function () {
  console.log('Timer')
}, 1000); // first argument is callback function and second is timer.

// Example :
setTimeout(function () {
  console.log('timer')
}, 5000)
function x (y) {
  console.log('x')
  y()
}
x(function y () {
  console.log('y')
})
// x y timer

// Another Example of callback
function printStr (str, cb) {
  setTimeout(() => {
    console.log(str)
    cb()
  }, Math.floor(Math.random() * 100) + 1)
}
function printAll () {
  printStr('A', () => {
    printStr('B', () => {
      printStr('C', () => {
      })
    })
  })
}
printAll() // A B C // in order

document.getElementById('clickMe').addEventListener('click', function xyz () {
  // when event click occurs, this callback function (xyz) is called into callstack
  console.log('Button clicked')
})

// For exampple, Lets implement a increment counter button.
// 1. Using global variable (not good as anyone can change it)
let count = 0
document
  .getElementById('clickMe')
  .addEventListener('click', function xyz () {
    console.log('Button clicked', ++count)
  })

// 2. Use closures for data abstraction
function attachEventList () {
  // creating new function for closure
  let count = 0
  document
    .getElementById('clickMe')
    .addEventListener('click', function xyz () {
      console.log('Button clicked', ++count); // now callback function forms closure with outer scope(count)
    })
}
attachEventList()
