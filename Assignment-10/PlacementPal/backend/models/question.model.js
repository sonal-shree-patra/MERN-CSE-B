const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    "questions": {
        type: String,
        required: true
    },
    "interviewId": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Interview",
        required: true
    }
})

const QuestionModel = mongoose.model("Question", questionSchema)
module.exports = QuestionModel