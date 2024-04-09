## First Class Functions ft. Anonymous Functions :

Functions are heart ♥ of Javascript.

### Q: What is Anonymous Function?

-   A function without a name is called Anonymous Function.

```js
function () {

}// this is going to throw Syntax Error - Function Statement requires function name.
```

-   They don't have their own identity. So an anonymous function without code inside it results in an error.
-   Anonymous functions are used when functions are used as values eg. the code sample for function expression above.

### Q: What is Function statement?

```js
function a() {
    console.log("Hello");
}
a(); // Hello
-   This way of creating functions are called function statement.
```

### Q: What is Function Expression?

-   Assigning a function to a variable. Function acts like a value.

```js
var b = function () {
    console.log("Hello");
};
b();
```

### Q: Difference between function statement and expression

-   The major difference between these two lies is Hoisting.

```js
a(); // "Hello A"
b(); // TypeError
function a() {
    console.log("Hello A");
}
var b = function () {
    console.log("Hello B");
};
// Why? During mem creation phase a is created in memory and function assigned to a. But b is created like a variable (b:undefined) and until code reaches the function()  part, it is still undefined. So it cannot be called.
```

### Q: What is Function Declaration?

-   Function Declaration is an other name for function statement.

### Q: What is Named Function Expression?

-   Same as Function Expression but function has a name instead of being anonymous.

```js
var b = function xyz() {
    console.log("b called");
};
b(); // "b called"
xyz(); // Throws ReferenceError:xyz is not defined.
// xyz function is not created in global scope. So it can't be called.
```

### Q: Parameters vs Arguments?

```js
var b = function (param1, param2) {
    // labels/identifiers are parameters
    console.log("b called");
};
b(arg1, arg2); // arguments - values passed inside function call
```

### Q: What is First Class Function aka First Class Citizens?

-   We can pass functions inside a function as arguments and /or return a function(HOF). These ability are altogether known as First class function. It is programming concept available in some other languages too.

```js
var b = function (param1) {
    console.log(param1); // prints " f() {} "
};
b(function () {});

// Other way of doing the same thing:
var b = function (param1) {
    console.log(param1);
};
function xyz() {}
b(xyz); // same thing as prev code

// we can return a function from a function:
var b = function (param1) {
    return function () {};
};
console.log(b()); //we log the entire fun within b.
```
