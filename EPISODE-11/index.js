const x = () => {
  var i = 1
  setTimeout(() => {
    console.log(i)
  }, 3000)
  console.log('Namaste Javascript')
}
x()
// Output:
// Namaste Javascript
// 1 after waiting for 3 seconds
