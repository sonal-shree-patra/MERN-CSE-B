// Returning Function form another function

// function outer(){
//     console.log("This is a outer function");
//     var a = 10;
//     function inner(){
//         console.log("This is the inner function");
//         console.log("a = "+a);
//         function test(){
//             console.log(a);
//         }
//     }
//     return inner
// }

// var res = outer()
// res()


// Passing a function as parameter 
// Callback function

// function add(a,b, callback){ // Higher order function
//     var c = a+b
//     // return c
//     callback(c)
// }

// function display(data){
//     console.log(data);
// }


// var res = add(10, 20, display) // display: callback function
// display(res)
// var res = add(10, 20, function(data){
//     console.log(data);
// }) 


// function evenOdd(n, callback){
//     var res = n%2 === 0 ? "Even" : "Odd"
//     callback(res)
// }

// evenOdd(101, function(res){
//     console.log(res);
// })

// setTimeout(function(){
//     console.log("Function Executed");
// }, 3000)

// console.log("Start");
// function add(a,b, callback){
//     console.log("Add is calld");
//     setTimeout(function() {
//         console.log("Sum is calculated");
//         // return a+b
//         callback(a+b)
//     }, 0);
// }
// console.log("Between");
// function display(data){
//     console.log(data);
// }

// var x = add(1,2, display)
// // display(x)
// console.log("end");


// var arr = [1,2,3,4,5,6,7,8,9,10]
// var s = 0
// var l = arr.length
// for(var i=0; i<l; i=i+2){
//     s+=arr[i] + arr[i+1]
// }

// setInterval(function(){
//     console.log("Hello...");
// }, 1000)

var d = new Date();
console.log(d);
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());
console.log(d.getDay());
console.log(d.getDate());
console.log(d.getFullYear());
setInterval(function(){
    // var d = new Date();
    document.getElementById("clock").innerHTML = new Date().toLocaleTimeString("en-US", {timeZone: "Europe/London"})
}, 1000)
