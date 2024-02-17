const add1 = (n) =>{
    console.log("add 1 is called")
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(n === undefined){
                reject("Must pass a parameter")
            } else {
                resolve(n+1)
            }
        }, 1000);
    })
}

const add2 = (n) =>{
    console.log("add 2 is called")
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(n+2)
        }, 1000);
    })
}

const add3 = (n) =>{
    console.log("add 3 is called")
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(n+3)
        }, 1000);
    })
}

// add1(10)
//    .then( data => add2(data))
//    .then( data => add3(data))
//    .then( data => console.log(data))
//    .catch( err => console.log(err))

// async/await

async function operate(){
    try {
        // let a = await add1(10)
        let a = await add1()
        let b = await add2(a)
        let c = await add3(b)
        console.log(c);
    } catch (error) {
        console.log(error);
    }
}

operate()