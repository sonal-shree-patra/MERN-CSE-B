const express = require('express')
const dbConnect = require('./db/db')
const interviewRouter = require('./route/interview.router')
const questionRouter = require('./route/question.roter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/interview", interviewRouter)
app.use("/question", questionRouter)

app.get("/", (req, res)=>{
    res.send("Hello Buddy!!!")
})


dbConnect()
app.listen(5000, ()=>console.log("http://localhost:5000"))