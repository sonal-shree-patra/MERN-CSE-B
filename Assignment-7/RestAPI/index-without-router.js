const express = require('express')
const dbConnect = require('./db/db')

const {
    addInterview,
    allInterviews,
    getInterviewById,
    updateInterview,
    deleteInterview
} = require('./controller/interview.controller')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send("Hello Buddy!!!")
})

app.get("/interview", allInterviews)
app.post("/interview", addInterview)
app.get("/interview/:id", getInterviewById)
app.put("/interview/:id", updateInterview)
app.delete("/interview/:id", deleteInterview)

dbConnect()
app.listen(5000, ()=>console.log("http://localhost:5000"))