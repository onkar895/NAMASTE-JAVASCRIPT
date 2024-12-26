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

const myFunction = () => {
  let myValue = 2
  console.log(myValue)

  const childFunction = () => {
    console.log(myValue += 1)
  }

  childFunction()
}

myFunction()

// In this example, childFunction has access to the variable myValue which is defined in the parent scope of myFunction.

// The lexical scope of childFunction allows access to the parent scope.

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

//  In above code, When displayName is returned, not only is the function returned but the entire closure (fun displayName + its lexical scope) is returned and put inside myFunc. So when myFunc is used somewhere else in program, it still remembers const 'name' inside makeFunc().
// Running this code has exactly the same effect as the previous example of the x() function above in lexical scoping.
// What's different (and interesting) is that the **displayName() inner function is returned from the outer function** before being executed.

// Example 2 :

const myFunction2 = () => {
  let myValue = 2
  console.log(myValue)

  const childFunction2 = () => {
    console.log(myValue += 1)
  }

  return childFunction2
}

const result = myFunction2()
console.log(result)
result()
result()
result()

// So here in the above code, myFunction returns childFunction instead of calling it.

// Therefore, when result is set equal to myFunction(), the console statement inside myFunction is logged, but not the statement inside childFunction.

// childFunction is not called into action.

// Instead, it is returned and held in result.

// In addition, we need to realize that myFunction has closed after it was called.

// The line with console.log(result) should show in the console that result now holds the anonymous function value that was childFunction.

// Now, when we call result(), we are calling the anonymous function that was assigned to childFunction.

// As a child of myFunction, this anonymous function has access to the myValue variable inside myFunction even after it has closed!

// The closure we created now allows us to continue to increase the value of the myValue variable every time we call result().
