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

// Shadowing : We can declare the global variable and a local variable of the same name.
var a = 100
{
  var a = 10 // same name as global var
  let b = 20
  const c = 30
  console.log(a) // 10
  console.log(b) // 20
  console.log(c) // 30
}
console.log(a) // 10 
// Instead of the 100 we were expecting.So block "a" modified value of global "a" as well.In console, only b and c are in block space.a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself.
