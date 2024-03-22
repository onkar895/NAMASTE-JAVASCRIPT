// CASE 1 : function a is able to access variable b from Global scope.
function a () {
  console.log(b) // 10
// Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope. 
}
var b = 10
a()

// CASE 2 : 20 is printed. It means that within nested function too, the global scope variable can be accessed.
function m () {
  c()
  function c () {
    console.log(b) // 20
  }
}
var b = 20
m()

// CASE 3 : 100 is printed meaning local variable of the same name took precedence over a global variable.
function x () {
  c()
  function c () {
    var b = 100
    console.log(b) // 100
  }
}
var b = 30
x()

// CASE 4 : A function can access a global variable, but the global execution context can't access any local variable.
function y () {
  var b = 40
  c()
  function c () {
    console.log(b)
  }
}
y()
console.log(b); // Error, Not Defined

// Normal :  
function two () {
  var a
  console.log(a)
}
function one () {
  var a = 2
  console.log(a)
  two()
}
var a = 1
console.log(a)
one()

// Output : 1 2 undefined

// Lexical environment :
// Every execution context has a reference to its outer environment, and that outer environment is called Lexical Environment.
function two () {
  console.log(a)
}
function one () {
  var a = 2
  console.log(a)
  two()
}
var a = 1
console.log(a)
one()

// Output : 1 2 1
