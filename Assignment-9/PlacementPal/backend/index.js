const express = require('express')
const cors = require('cors')
const dbConnect = require("./db/db.config")
const interviewRouter = require("./routes/interview.routes")
const questionRouter = require('./routes/question.routes')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/interview", interviewRouter)
app.use("/question", questionRouter)

app.get("/", (req, res)=>{
    res.send("<h1>REST API!!!</h1>")
})


dbConnect()
app.listen(PORT, ()=>console.log("http://localhost:5000"))