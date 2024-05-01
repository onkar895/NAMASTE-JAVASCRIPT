// Callback Hell :

console.log('Namaste')
console.log('JavaScript')
console.log('Season 2')
// Namaste
// JavaScript
// Season 2

// 💡 It is quickly printing because `Time, tide & Javascript waits for none.`

// But what if we have to delay execution of any line, we could utilize callback, How?

console.log('Namaste')
setTimeout(function () {
  console.log('JavaScript')
}, 5000)
console.log('Season 2')
// Namaste
// Season 2
// JavaScript

// 💡 Here we are delaying the execution using callback approach of setTimeout.
