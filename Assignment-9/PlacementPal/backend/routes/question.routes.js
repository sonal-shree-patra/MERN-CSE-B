const express = require('express')

const {
    addQuestion,
    getAllQuestions,
    updateQuestion,
    deleteQuestion
} = require('../controllers/question.controller')

const questionRouter = express.Router()

questionRouter.post("/", addQuestion)
questionRouter.get("/", getAllQuestions)
questionRouter.put("/:id", updateQuestion)
questionRouter.delete("/:id", deleteQuestion)

module.exports = questionRouter