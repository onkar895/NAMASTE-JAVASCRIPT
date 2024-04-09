// Function statement :
function a () {
  console.log('Hello')
}
a() // Hello

// Function Expression :
var b = function () {
  console.log('Hello')
}
b()

// Difference between function statement and expression
// The major difference between these two lies in Hoisting.

a(); // "Hello A"
b() // TypeError
function a () {
  console.log('Hello A')
}
var b = function () {
  console.log('Hello B')
}

// What is First Class Function aka First Class Citizens :

// We can pass functions inside a function as arguments and /or return a function(HOF). These ability are altogether known as First class function. It is programming concept available in some other languages too.

var b = function (param1) {
  console.log(param1); // prints " f() {} "
}
b(function () {
  
})

// Other way of doing the same thing:
var b = function (param1) {
  console.log(param1)
}
function xyz() {
  
}
b(xyz) // same thing as prev code

// we can return a function from a function:
var b = function (param1) {
  return function () {

  }
}
console.log(b()); // we log the entire fun within b.
