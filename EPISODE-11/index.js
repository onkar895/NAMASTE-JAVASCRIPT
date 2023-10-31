const x = () => {
  var i = 1
  setTimeout(() => {
    console.log(i)
  }, 3000)
  console.log('Namaste Javascript')
}
x()
// So, this setTimeout takes the callback function and attaches the timer of 3000 milliseconds to it.
// and once the timer expires, it takes that function and puts it again to the call stack and runs it, that's how setTimeout work.
