getName() // Calling before declaration

var x = 7 // undefined

function getName () { // Declaring
  console.log('Namaste Javascript')
}

console.log(x)

// In the above program, the function getName() is called before declaring it and the program shows the output. This is due to hoisting.
