const mongoose = require("mongoose")

const interviewSchema = new mongoose.Schema({
    companyName : {
        type: String,
        required: true
    },
    interviewDate : {
        type: Date,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    broadArea : [
        { 
            type : "String", 
            required: true
        }
    ],
    isFresher: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

const Interview = mongoose.model("Interview", interviewSchema)
module.exports = Interview