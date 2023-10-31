// Lexical Scoping :
function x () {
  var a = 17
  function y () {
    console.log(a)
  }
  y()
}
x()

// x() creates a local variable called 'a' and a function called y(). 
// The y() function is an inner function that is defined inside x() and is available only within the body of the x() function. 
// Note that the y() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, y() can access the variable name declared in the parent function, x().
