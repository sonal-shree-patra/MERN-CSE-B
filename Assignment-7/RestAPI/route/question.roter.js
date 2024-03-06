const express = require('express')
const {
    addQuestion,
    getAllQuestions
} = require('../controller/question.controller')

const questionRouter = express.Router()

questionRouter.post("/", addQuestion)
questionRouter.get("/", getAllQuestions)

module.exports = questionRouter