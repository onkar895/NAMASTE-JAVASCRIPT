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

// Find the even Numbers in he arrayss
const isEvenNum = arr.filter((y) => {
  return (y % 2 === 0)
})
console.log(isEvenNum)

// reduce :
// Used at a place where you have to take all the elements of an array and comes with the single value out of them.

// For example :
// Like sum of all the elements in an array.
// or may be to find max/min number inside the array.

// Functional/Normal way :

const findSum = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
console.log(findSum(arr))

// By using reduce :

const output = arr.reduce((x, acc) => {
  return acc = acc + x
})
console.log(output)
