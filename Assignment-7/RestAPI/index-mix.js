const express = require('express')
const mongoose = require('mongoose')

const Interview = require('./model/interview.model')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send("Hello Buddy!!!")
})

app.get("/interview", async(req, res)=>{
    // const interviews = [
    //     {id: 1, "company": "TCS"},
    //     {id: 2, "company": "CTS"},
    //     {id: 3, "company": "HCL"},
    // ]
    // res.json(interviews)
    try {
        let interviews = await Interview.find()
        res.status(200).json(interviews)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
})

// app.post("/interview", (req, res)=>{
//     // let data = req.body
//     // console.log("Add Interview is called");
//     // console.log(data);
//     // res.status(201).json({"message": "Interview Added"})

// })

app.post("/interview", async(req, res)=>{
    try {
        let interview = await Interview.create(req.body)
        res.status(201).json(interview)
    } catch (error) {
        console.log(error);
        res.status(400).json({"message": error.message})
    }

})


app.get("/interview/:id", (req, res)=>{
    // let data = req.params
    let { id } = req.params
    // console.log(data);
    // console.log(id);
    res.json({"message": `Details of ${id}`})
})

app.put("/interview/:id", (req, res)=>{
    let {id} = req.params
    let data = req.body
    console.log(id);
    console.log(data);
    res.json({"message": `Udpate request for ${id} is received`})
})

app.delete("/interview/:id", (req, res)=>{
    let {id} = req.params
    res.json({"message": `Delete request for ${id} is received`})
})

async function dbConnect(){
    DBURL="mongodb+srv://etlab:etlab@cluster0.pielryo.mongodb.net"
    DBNAME="placementpal"
    try {
        await mongoose.connect(DBURL+"/"+DBNAME)
        console.log("Database Connected");
    } catch (error) {
        console.log("Connection Error "+error );
    }

}


dbConnect()
app.listen(5000, ()=>console.log("http://localhost:5000"))