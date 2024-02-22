// Common JS Import 
// Default Import
// const add = require('./Calculator')
// const sum = require('./Calculator')

// Named Import
// const someting = require("./Calculator")
// const {add, difference} = require("./Calculator")
const {sum, difference, Complex} = require("./Calculator")

// console.log(add(2,3))
// console.log(sum(2,3))
// console.log(someting.add(3,4));
console.log(sum(3,4));
console.log(difference(3,4));
let c = new Complex(10)