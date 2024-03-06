const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    interviewId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Interview",
        required: true
    },
    questions: {
        type: String,
        required: true
    }
})

const Question = mongoose.model("Question", questionSchema)
module.exports = Question