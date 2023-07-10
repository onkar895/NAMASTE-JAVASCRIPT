var x = 7
getName() // Calling before declaration
setName() // Calling before declaration
console.log(x)

function getName () { // Declaring
  console.log('Namaste Javascript')
}

function setName () {
  console.log('Namaste React')
}

// In the above program, the function getName() and setName() and variable x are called before declaring it and the program shows the output. This is due to hoisting.
