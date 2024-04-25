## map, filter & reduce :

-   map, filter & reducer are Higher Order Functions.

### Map function :

-   It is basically used to transform a array. The map() method creates a new array with the results of calling a function for every array element.

-   const output = arr.map(function) // this function tells map that what transformation I want on each element of array.

```js
// Double the given array -
const arr = [3, 5, 8, 4, 6];

const doubledArray = arr.map((x) => {
    return x * 2;
}); // Internally map will run double function for each element of array and create a new array and returns it.
console.log(doubledArray); // [ 6, 10, 16, 8, 12 ]
```

-   So basically map function is mapping each and every value and transforming it based on given condition.

### Filter function :

-   Filter function is basically used to filter the value inside an array. The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.
-   It does not change the original array.

```js
// Find the even Numbers in the array
const arr = [3, 5, 8, 4, 6];

const isEvenNum = arr.filter((y) => {
    return y % 2 === 0;
});
console.log(isEvenNum);
```

-   Filter function creates an array and store only those values which evaluates to true.

### Reduce function

-   It is a function which take all the values of array and gives a single output of it. It reduces the array to give a single output.

```js
const array = [5, 1, 3, 2, 6];
// Calculate sum of elements of array - Non functional programming way
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(array)); // 17

// reduce function way
const sumOfElem = arr.reduce(function (accumulator, current) {
    // current represent the value of array
    // accumulator is used the result from element of array.
    // In comparison to previous code snippet, *sum* variable is *accumulator* and *arr[i]* is *current*
    accumulator = accumulator + current;
    return accumulator;
}, 0);
//In above example sum was initialized with 0, so over here accumulator also needs to be initialized, so the second argument to reduce function represent the initialization value.
console.log(sumOfElem); // 17
```

```js
// find max inside array: Non functional programming way:
const array = [5, 1, 3, 2, 6];
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(array)); // 6

// using reduce
const output = arr.reduce((acc, current) => {
    if (current > acc) {
        acc = current;
    }
    return acc;
}, 0);
console.log(output); // 6

// acc is just a label which represent the accumulated value till now,
// so we can also label it as max in this case
const output = arr.reduce((max, current) => {
    if (current > max) {
        max = current;
    }
    return max;
}, 0);
console.log(output); // 6
```

### Some Tricky questions of map, filter and reduce :

```js
// 1. Find out the fullName of the users
const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

const fullName = users.map((name) => {
    return name.firstName + " " + name.lastName;
});
console.log(fullName); // [ 'Alok Raj', 'Ashish Kumar', 'Ankit Roy', 'Pranav Mukherjee' ]

// 2. Find out the firtName of all the users whose age is 29.

const findFirstName = users.filter((fname) => fname.age === 29).map((x) => x.firstName);

console.log(findFirstName); // [ 'Ashish', 'Ankit' ]

// 3. Find out how many users have particular age, let's find how many users have age 29?

const Age = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(Age); // { '23': 1, '29': 2, '50': 1 }
```
