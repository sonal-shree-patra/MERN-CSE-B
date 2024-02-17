// function myFunc(){
//     let promise = new Promise(()=>{})
//     return promise
// }
// function myFunc(){
//     let promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Promise is resolved")
//             // reject("Promise Rejected")
//         }, 1000)
//     })
//     return promise
// }
// console.log("start");
// function myFunc(){
//     let promise = new Promise((resolve, reject)=>{
//         resolve("Promise is resolved")
//         // setTimeout(()=>{
//         //     // reject("Promise Rejected")
//         // }, 0)
//     })
//     return promise
// }
// console.log("Between");

// setTimeout(() => {
//     console.log("Timer Out");
// }, 0);

// let res = myFunc()
// console.log(res);
// res
//     .then(data => console.log(data))
//     .catch(err => console.log("Error: "+err))
// console.log("End");


function divison(a,b){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(b===0){
                reject("Divisor can not be zero")
            } else {
                resolve(a/b)
            }
        }, 1000)
    })
}

divison(3,2)
    .then( data => console.log("Result: "+data))
    .catch( err => console.log("Error: "+err))