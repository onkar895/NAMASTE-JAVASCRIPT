## What is a Block?

-   **Block** in Javascript also known as **Compound Statement**.
-   We group them within {...}
-   It is used to combine multiple javascript statements together into one group. Just like the below code :

```js
{
    var a = 10;
    let b = 20;
    const c = 30;
    // Here let and const are hoisted in Block scope,
    // While, var is hoisted in Global scope.
}
```

### Block Scope and its accessibility example :

```js
{
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a); // 10
console.log(b); // Uncaught ReferenceError: b is not defined
```

-   Reason?

    -   In the BLOCK SCOPE; we get b and c inside it initialized as _undefined_ as a part of hoisting (in a seperate memory space called **block**)
    -   While, a is stored inside a GLOBAL scope.

        -   Thus we say, _let_ and _const_ are BLOCK SCOPED. They are stored in a separate mem space which is reserved for this block. Also, they can't be accessed outside this block. But var a can be accessed anywhere as it is in global scope. Thus, we can't access them outside the Block.

### What is Shadowing?

-   We can declare the **global variable and a local variable** of the same name.

```js
var m = 100;
var n = 200;
var p = 300;
{
    var m = 10; // same name as global var
    let n = 20;
    const p = 30;
    console.log(m); // 10
    console.log(n); // 20
    console.log(p); // 30
}
console.log(m); // 10
console.log(n); // 200
console.log(p); // 300
```

-   Instead of the 100 we were expecting.So block "m" modified value of global "m" as well.
-   In console, only n and p are in block space thats why its result shows the output in the global scope.
-   m initially is in global space(m = 100), and when m = 10 line is run, m is not created in block space, but replaces 100 with 10 in global space itself instead n and p not replacing the values because its in the global space.
-   So, If one has same named variable outside the block, the variable inside the block shadows the outside variable. This happens only for var.

-   Similar things happens with the function shadowing :

```js
var d = 100;
var e = 200;
var f = 300;
function x() {
    var d = 10; // same name as global var
    let e = 20;
    const f = 30;
    console.log(d); // 10
    console.log(e); // 20
    console.log(f); // 30
}
x();
console.log(d); // 10
console.log(e); // 200
console.log(f); // 300
```

### Let's observe the behaviour in case of let and const and understand it's reason :

```js
let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(b); // 20
}
console.log(b); // 100,
```

-   Both b's are in separate spaces (one in Block(20) and one in Script(another arbitrary mem space)(100)).
-   Same is also true for _const_ declarations.

### Block Scope Explaination :

-   Same logic is true even for functions

```js
const c = 100;
function x() {
    const c = 10;
    console.log(c); // 10
}
x();
console.log(c); // 100
```

### What is Illegal Shadowing?

```js
// Invalid
let a = 20;
{
    var a = 20;
}
// Uncaught SyntaxError: Identifier 'a' has already been declared
```

```js
// Valid
var a = 20;
{
    let a = 20;
}
```

-   We cannot shadow let with var. But it is valid to shadow a let using a let.
-   However, we can shadow var with let.
-   All scope rules that work in function are same in arrow functions too.
-   Since var is function scoped, it is not a problem with the code below.

```js
// Valid
let a = 20;
function x() {
    var a = 20;
}
// Since var is function scoped, it is not a problem with the code below.
```

### Summary :

-   Code inside curly bracket is called **block**.
-   Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
-   Block values are stored inside \*8separate memory than global\*\*. They are stored in block. (the reason let and const are called block scope)
-   **Shadowing of variables** using var, let and const.
-   The shadow should not cross the scope of original otherwise it will give error.
-   shadowing let with var is **illegal shadowing** and gives error.
-   var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.
