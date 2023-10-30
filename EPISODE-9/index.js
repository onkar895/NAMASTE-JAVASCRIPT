// Block in Javascript :
{
  // This is a Block in Javascript and also known as Compound Statement. We group them within {...}
  // It is used to combine multiple javascript statements in one group. Just like the below code :
  var a = 10
  console.log(a)
}

// For Example :
if (true) {
  var x = 20
  console.log(x)
}

// Block Scope in Javascript : 
{
  // All variables and functions we can access inside this block.
  var b = 10
  let c = 20
  const y = 30
  console.log(b) // 10
  console.log(c) // 20
  console.log(y) // 30
}
console.log(b) // 10
// let and const are in block scope, so you cannot access this ouside this scope.
console.log(c) // ReferenceError: c is not defined
console.log(y) // ReferenceError: y is not defined

// Variable Shadowing : We can declare the global variable and a local variable of the same name.
var m = 100
var n = 200
var p = 300
{
  var m = 10 // same name as global var
  let n = 20
  const p = 30
  console.log(m) // 10
  console.log(n) // 20
  console.log(p) // 30
}
console.log(m) // 10 
console.log(n) // 200 
console.log(p) // 300
// Instead of the 100 we were expecting.So block "m" modified value of global "m" as well.
// In console, only n and p are in block space thats why its result shows the output in the global scope.
// m initially is in global space(m = 100), and when m = 10 line is run, m is not created in block space, but replaces 100 with 10 in global space itself instead n and p not replacing the values because its in the global space.

// Similar things happens with the function shadowing : 
var d = 100
var e = 200
var f = 300
function x () {
  var d = 10 // same name as global var
  let e = 20
  const f = 30
  console.log(d) // 10
  console.log(e) // 20
  console.log(f) // 30
}
x()
console.log(d) // 10 
console.log(e) // 200 
console.log(f) // 300
