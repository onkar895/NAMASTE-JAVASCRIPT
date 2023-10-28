var x = 10
// Global Space
function b () {
  var a = 20
  console.log(a)
// Local Space
}

console.log(x) // 10
console.log(this.x) // 10
console.log(window.x) // 10

// So here x, this.x and window.x all are refering to the same place in the memory space.
