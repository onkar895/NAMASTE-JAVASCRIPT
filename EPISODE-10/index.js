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

// Closure :
function makeFunc () {
  const name = 'Onkar'
  function displayName () {
    console.log(name)
  }
  return displayName
}

const myFunc = makeFunc() // So this myfunc variable has displayname() function inside it.
myFunc() // Onkar
console.log(myFunc)

// Running this code has exactly the same effect as the previous example of the x() function above in lexical scoping.
// What's different (and interesting) is that the **displayName() inner function is returned from the outer function** before being executed.
