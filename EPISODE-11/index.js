// const x = () => {
//   var i = 1
//   setTimeout(() => {
//     console.log(i)
//   }, 3000)
//   console.log('Namaste Javascript')
// }
// x()
// So, this setTimeout takes the callback function and attaches the timer of 3000 milliseconds to it. and stores it somewhere.
// and once the timer expires, it takes that function and puts it again to the call stack and runs it, that's how setTimeout work.

// function y () {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
//   }
//   console.log('Namaste Javascript')
// }
// y()

function y () {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
  console.log('Namaste Javascript')
}
y()

// function z () {
//   for (var i = 1; i <= 5; i++) {
//     function close (i) {
//       setTimeout(function () {
//         console.log(i)
//       }, i * 1000)
// put the setT function inside new function close()
//     }
//     close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
//   }
//   console.log('Namaste Javascript')
// }
// z()

// Real time example of closure :
// const clickHandler = (color) => {
//   const newFunc = () => {
//     document.body.style.backgroundColor = `${color}`
//   }
//   return newFunc
// }

// document.getElementById('orange').onclick = clickHandler('orange')
// document.getElementById('purple').onclick = clickHandler('purple')
