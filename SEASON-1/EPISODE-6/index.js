var a; // Memory is allocated for 'a', but no value is assigned yet
console.log(a); // Output: undefined

console.log(x) // undefined
var x = 25
console.log(x) // 25

// console.log(z); // Uncaught ReferenceError: a is not defined

// JS is a loosely typed / weakly typed language. It doesn't attach variables to any datatype. We can say var b = 100, and then change the value to boolean a = true or string a = 'hello world' later on.

var b
console.log(b) // undefined
b = 100
console.log(b) // 100
b = 'hello world'
console.log(b) // hello world
