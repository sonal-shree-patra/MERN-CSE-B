let arr = [1,2,3,4,5]
// arr.push(10)
// console.log(arr);
// arr.pop()
// console.log(arr);
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }
//1. forEach
// arr.forEach((n, i)=>{
//     console.log(`${i} => ${n}`);
// })

// 2.map
// arr.map((n, i)=>{
//     console.log(n);
// })
// let newArr = arr.map(n=>n*10)
// let newArr = arr.map((n)=>{
//     return n*10
// })
// let newArr = arr.map((n)=>(n*10))
// let newArr = arr.map((n)=>n*10)
// let newArr = arr.map(n=>n*10)
// console.log(newArr);

//3.filter
// let oddArr = arr.filter((n)=>{
//     if(n%2!==0){
//         return true
//     }
//     else{
//         return false
//     }
// })
// let num = 10
// console.log(num%2===0);
// let oddArr = arr.filter(n=>n%2!==0)
// console.log(oddArr);

//4. reduce
// let s = 0;
// for(){
//     s =s+arr[i]
// }


// let sum = arr.reduce((s, n)=>{ return s+n }, 0)
// let sum = arr.reduce((s, n)=>s+n, 0)
// console.log(sum);

// let l = arr[0]
// for(){

// }

// let largest = arr.reduce((l, n)=>{
//     if(n>l) 
//         return n
//     else
//         return l
// }, arr[0])
// let largest = arr.reduce( (l, n)=>n>l ? n : l, arr[0])
// console.log(largest);

arr = [1,2,11,22,23,222, 33,3,4]
// 5. sort
// arr.sort((a, b)=>{
//     if(a>b) return 1
//     else if(b>a) return -1
//     else return 0
// })
arr.sort((a, b)=>a-b)
console.log(arr);