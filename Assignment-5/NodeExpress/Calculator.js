function add(a,b){
    return a+b
}

function difference(a,b){
    return a-b
}
const PI = 3.14

class Complex{
    constructor(x){
        console.log("Complex obj is created "+x);
    }
}

// Common JS
// Default Export
// module.exports = add

// Named Export
// module.exports = {add: add, difference: difference}
// module.exports = {add, difference}
module.exports = {sum: add, difference, PI, Complex}