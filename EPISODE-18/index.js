// Higher-Order Functions ft. Functional Programming :

function x () {
  console.log('Hello')
}

function y (x) {
  x()
}
y(x) // Hello
// So here,y is a higher order function.
// and x is a callback function.

// Let's try to understand how we should approach solution in interview. I have an array of radius and I have to calculate area using these radius and store in an array.

// First Approach:

const radius = [3, 2, 4, 5]

const calculateArea = function (radius) {
  const output = []
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i])
  }
  return output
}

console.log(calculateArea(radius))

// The above solution works perfectly fine but what if we have now requirement to calculate array of circumference. Code now be like

const radius1 = [1, 2, 3, 4]
const calculateCircumference = function (radius1) {
  const output = []
  for (let i = 0; i < radius1.length; i++) {
    output.push(2 * Math.PI * radius1[i])
  }
  return output
}
console.log(calculateCircumference(radius1))
