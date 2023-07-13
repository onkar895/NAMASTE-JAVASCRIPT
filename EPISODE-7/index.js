console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b) // prints undefined as expected
let a = 10
console.log(a) // 10
var b = 15
console.log(window.a) // undefined
console.log(window.b) // 15

// Both a and b are actually initialized as undefined in hoisting stage.
// But var b is inside the storage space of GLOBAL, and a is in a separate memory object called script, where it can be accessed only after assigning some value to it first ie.one can access 'a' only if it is assigned.Thus, it throws error.

// Reference Error are thrown when variables are in temporal dead zone.

// Syntax Error doesn't even let us run single line of code.

// let x = 10
// let x = 100
// this code is rejected upfront as SyntaxError. (duplicate declaration)

// let y = 10
// var y = 100
// this code also rejected upfront as SyntaxError. (can't use same name in same scope)

// Let is a stricter version of var. Now, const is even more stricter than let.
let x
x = 10
console.log(x) // 10.
// Note that declaration and assigning of x is in different lines.

// const y
y = 10
console.log(y); // SyntaxError: Missing initializer in const declaration. (This type of declaration won't work with const. const y = 10 only will work)

const z = 100
z = 1000; // this gives us TypeError: Assignment to constant variable.
