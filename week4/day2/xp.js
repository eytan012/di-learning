//Exercise 1 : Function With Two Parameters
// Instructions
// Create a one line function that receives two numbers as parameters and returns the sum.

// const calc = (a, b) => {return a * b}
// console.log(calc(1,2))

//Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.


//Exercise 3 : Currying
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)