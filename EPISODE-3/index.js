// Without Hoisting
var x = 7

function myName () {
  console.log('Omkar Karale')
}

myName()
console.log(x)

var height = 180
console.log(height); // -> 180
console.log(weight); // -> undefined
var weight = 90
console.log(weight)

// Hoisting
console.log(y)
var y = 9
var x = 7
console.log(x)
getName() // Calling before declaration
setName() // Calling before declaration

function getName () { // Declaring
  console.log('Namaste Javascript')
}

function setName () {
  console.log('Namaste React')
}

// In the above program, the function getName() , setName() and variable x are called before declaring it however the program shows the output. This is due to hoisting.
