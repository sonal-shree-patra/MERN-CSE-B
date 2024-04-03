const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send("<h1>REST API!!!</h1>")
})

app.get("/interview", (req, res)=>{
    const data = [
        {id: 1, company: "xyz"},
        {id: 2, company: "abc"},
        {id: 3, company: "def"},
    ]
    res.json(data)
})

app.post("/interview", (req, res)=>{
    const data = req.body
    console.log(data);
    res.status(201).json({"message": "Data Added"})
})

app.get("/interview/:id", (req, res)=>{
    // const data = req.params
    const { id } = req.params
    console.log(id);
    res.json({"message": `Data of id ${id}`})
})

app.put("/interview/:id", (req, res)=>{
    const data = req.body
    const { id } = req.params
    console.log(id);
    console.log(data);
    res.status(200).json({"message": `Update request for id ${id}`})
})

app.delete("/interview/:id", (req, res)=>{
    const { id } = req.params
    console.log(id);
    res.status(200).json({"message": `Delete request for id ${id}`})
})

app.listen(5000, ()=>console.log("http://localhost:5000"))