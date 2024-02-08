// Features of ES6
//1. let and const
// let a = 1;
// const a =10;
// a = 2
// console.log(a);

{
    let x = 10
}
// for(let x=0; x<=10; x++){}
console.log("X="+x);
// let arr = [1,2,3,4,5]
// let a = arr
// console.log(a);
// a[2] = 200
// console.log(arr);
// console.log(a);

// 2. Spread / Rest Operator 
// let a = [...arr]
// console.log(a);
// a[2] = 200
// console.log(arr);
// console.log(a);
// let a = [10, 20, 30, ...arr]
// let a = [...arr, 10, 20, 30]
// console.log(a);

// function test(a, ...b){
//     console.log(a);
//     console.log(b);
// }
// test(1,2,3,4,5)

// 3. Default Valued Argument
// function add(a, b, c=0){
//     return a+b+c
// }

// console.log(add(1,2));
// console.log(add(1,2,3));


// let std = {
//     roll: 1,
//     name: "Jhon",
//     address: {
//         city: "BBSR",
//         state: "Odisha"
//     }
// }

// console.log(std.roll);
// console.log(std.name);
// console.log(std.address.city);

// 4. Destructuring
// let {roll, name} = std;
// let {city, state} = std.address;
// console.log(r);
// console.log(name);
// console.log(city);

// let arr = ["Tea", "coffee", "Milk"]
// let [ x, ...y ] = arr

// console.log(x);
// console.log(y);

// 5. class
class Employee{
    constructor(){
        console.log("Obj Created");
    }

    func(x) {
        console.log(x);
    }
}

// const emp = new Employee()
// emp.func(10)

// 6. Arrow function
// function test(){

// }
// test() // undefined()
// var test = function(){
//     console.log("function is called");
// }

// test()
// let test = () => {
//     console.log("function is called");
// }
// test()

// function add(a,b){
//     return a+b
// }
// let add = (a,b) => {
//     return a+b
// }
// let add = (a,b) => (
//      a+b
// )
// let add = (a,b) => a+b // Lambda
// let add = a => a+2 // Lambda

// console.log(add(2,3));

// function test(a,b,c,d){
//     console.log(arguments);
// }
// let test= (a,b,c,d)=>{
//     console.log(arguments);
// }
// test(1,2,3,4)

let emp = {
    name: "Jhon Doe",
    // getName: function(){
    //     console.log(this.name);
    // }
    getName: ()=>{
        console.log(this.name);
    }
}
// emp.getName()
// console.log(this);

class Product{
    // constructor(){
    //     console.log("Product object is created");
    // }

    // display(){
    //     console.log("Product Display");
    // }
    // constructor=()=>{ // Error for this binding
    //     console.log("Product object is created");
    // }

    display=()=>{
        console.log("Product Display");
    }
}
// let p = new Product()
// p.display()

// 7. Template Literal

let name = "Sam"
let age = 20

console.log(name+" is "+age+" years old");
// console.log(name+' is '+age+' year's old');
console.log(`${name} is ${age} year's old`);