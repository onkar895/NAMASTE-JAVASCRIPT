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
// let and const are block scoped, so you cannot access them ouside this scope.
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

// Illegal Shadowing :
// We cannot shadow let with var.But it is valid to shadow a let using a let.However, we can also shadow var with let.
// Invalid
let a = 20
{
  var a = 20
}
// Uncaught SyntaxError: Identifier 'a' has already been declared

// Valid
var a = 20
{
  let a = 20
}

// All scope rules that work in function are same in arrow functions too.
// Valid
let a = 20
function x () {
  var a = 20 // Since var is function scoped, it is not a problem with the code below.
}

// Summary : 
// 1. Code inside curly bracket is called block.
// 2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
// 3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
// 4. Shadowing of variables using var, let and const.
// 5. The shadow should not cross the scope of original otherwise it will give error.
// 6. shadowing let with var is illegal shadowing and gives error.
// 7. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.
