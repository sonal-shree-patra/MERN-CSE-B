const mongoose = require('mongoose')
async function dbConnect(){
    DBURL="YOUR_DATABSE_URL"
    DBNAME="placementpal"
    try {
        await mongoose.connect(DBURL+"/"+DBNAME)
        console.log("Database Connected");
    } catch (error) {
        console.log("Connection Error "+error );
    }

}

module.exports = dbConnect