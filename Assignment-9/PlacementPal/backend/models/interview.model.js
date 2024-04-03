const mongoose = require('mongoose')

const interviewSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Compny name is required"]
    },
    interviewDate: {
        type: Date,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    broadArea: [{ type: String, required: true}],
    isFresher: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

const InterviewModel = mongoose.model("Interview", interviewSchema)
module.exports = InterviewModel