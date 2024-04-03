const mongoose = require('mongoose')

async function dbConnect(){
    const DB_URL = "mongodb+srv://etlaba:etlaba@cluster0.bkmjv4h.mongodb.net"
    const DB = "placementpal"
    try {
        await mongoose.connect(DB_URL+"/"+DB)
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Database Error: "+ error);
    }
}

module.exports = dbConnect