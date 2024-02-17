const add1 = (n, callback) =>{
    console.log("add 1 is called")
    setTimeout(() => {
        callback(n+1)
    }, 1000);
}

const add2 = (n, callback) =>{
    console.log("add 2 is called")
    setTimeout(() => {
        callback(n+2)
    }, 1000);
}

const add3 = (n, callback) =>{
    console.log("add 3 is called")
    setTimeout(() => {
        callback(n+3)
    }, 1000);
}

const add4 = (n, callback) =>{
    console.log("add 4 is called")
    setTimeout(() => {
        callback(n+4)
    }, 1000);
}

const add5 = (n, callback) =>{
    console.log("add 5 is called")
    setTimeout(() => {
        callback(n+5)
    }, 1000);
}

add1(10,(a)=>{
    add2(a, (b)=>{
        add3(b , (c)=>{
            add4(c, (d)=>{
                add5(d, (e)=>{
                    console.log(e);
                })
            })
        })
    })
})