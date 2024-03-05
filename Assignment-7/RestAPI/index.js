const express = require('express')
const dbConnect = require('./db/db')

const {
    addInterview,
    allInterviews
} = require('./controller/interview.controller')



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send("Hello Buddy!!!")
})

app.get("/interview", allInterviews)
app.post("/interview", addInterview)


// app.get("/interview/:id", (req, res)=>{
//     // let data = req.params
//     let { id } = req.params
//     // console.log(data);
//     // console.log(id);
//     res.json({"message": `Details of ${id}`})
// })

// app.put("/interview/:id", (req, res)=>{
//     let {id} = req.params
//     let data = req.body
//     console.log(id);
//     console.log(data);
//     res.json({"message": `Udpate request for ${id} is received`})
// })

// app.delete("/interview/:id", (req, res)=>{
//     let {id} = req.params
//     res.json({"message": `Delete request for ${id} is received`})
// })




dbConnect()
app.listen(5000, ()=>console.log("http://localhost:5000"))