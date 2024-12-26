// map, filter & reduce :

// Map :  Used to transform an array.
// transform means if you have to transform each and every value in the array and get a new array out of it.

const arr = [3, 5, 8, 4, 6]

// Double the given array -

const doubledArray = arr.map((x) => {
  return x * 2
})
console.log(doubledArray)

// filter : Used to filter the values in an array

// Find the even Numbers in the array
const isEvenNum = arr.filter((y) => {
  return (y % 2 === 0)
})
console.log(isEvenNum)

// reduce :
// Used at a place where you have to take all the elements of an array and comes with the single value out of them.

// For example :
// Like sum of all the elements in an array.
// or may be to find max/min number inside the array.

// Non-Functional/Normal way :

const findSum = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
console.log(findSum(arr))

// By using reduce :

const output = arr.reduce((acc, curr) => {
  return acc = acc + curr
}, 0)
console.log(output)

// Find the maximum number inside the array :

// Non-Functional/Normal way :

const findMax = (arr) => {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max
}
console.log('Maximum number is', findMax(arr))

// By using reduce :

const Output = arr.reduce((max, curr) => {
  if (max < curr) {
    max = curr
  }
  return max
}, 0)
console.log(Output)

// Some Tricky questions of map, filter and reduce :

// 1. Find out the fullName of the users
const users = [
  { firstName: 'Alok', lastName: 'Raj', age: 23 },
  { firstName: 'Ashish', lastName: 'Kumar', age: 29 },
  { firstName: 'Ankit', lastName: 'Roy', age: 29 },
  { firstName: 'Pranav', lastName: 'Mukherjee', age: 50 }
]

const fullName = users.map((name) => {
  return name.firstName + ' ' + name.lastName
})
console.log(fullName)

// 2. Find out the firtName of all the users whose age is 29.

const findFirstName = users.filter((fname) => fname.age === 29).map((x) => x.firstName)

console.log(findFirstName)

// 3. Find out how many users have particular age, let's find how many users have age 29?

const Age = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age]
  }else {
    acc[curr.age] = 1
  }
  return acc
}, {})

console.log(Age)
