console.log('start')
setTimeout(function cb () {
  console.log('timer')
}, 5000)
console.log('end')
// start end timer

// Another example to understand Eventloop & Callback Queue :
console.log('Start')
document.getElementById('btn').addEventListener('click', function cb () {
  // cb() registered inside web api environment and event(click) attached to it. i.e. REGISTERING CALLBACK AND ATTACHING EVENT TO IT. 
  console.log('Callback')
})
console.log('End'); // calls console api and logs in console window. After this GEC get removed from call stack.

// In above code, even after console prints "Start" and "End" and pops GEC out, the eventListener stays in webapi env(with hope that user may click it some day) until explicitly removed, or the browser is closed.
