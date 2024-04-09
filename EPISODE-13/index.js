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
