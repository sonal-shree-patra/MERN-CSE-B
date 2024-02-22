const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log("Server is responding");
    let url = req.url
    console.log(url);
    // res.setHeader("Content-Type", "text/html")
    // res.write("Hello from NodeJS Server")
    // if(url=="/"){
    //     res.setHeader("Content-Type", "text/html")
    //     res.write("Home Page")
    // } else if(url=="/about"){
    //     res.setHeader("Content-Type", "text/html")
    //     res.write("About Page")
    // } else {
    //     res.setHeader("Content-Type", "text/html")
    //     res.write("<h1>404 | Page not found</h1>")
    // }
    // res.end()

    if(url=="/"){
        fs.readFile("public/index.html", "utf-8", (err, data)=>{
            if(err) throw err
            res.write(data)
            res.end()
        })
    } else if(url=="/about"){
        fs.readFile("public/about.html", "utf-8", (err, data)=>{
            if(err) throw err
            res.write(data)
            res.end()
        })
    } else if(url=="/contact"){
        fs.readFile("public/contact.json", "utf-8", (err, data)=>{
            if(err) throw err
            res.setHeader("Content-Type", "application/json")
            res.write(data)
            res.end()
        })
    } 
})

server.listen(5000, ()=>console.log("Server started ar localhost:5000"))