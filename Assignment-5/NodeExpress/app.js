const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res)=>{
    // res.send("Home Page")
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/about", (req, res)=>{
    res.send("About Page")
})

app.listen(5000, ()=>console.log("Server Started"))