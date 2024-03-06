const Question = require('../model/question.model')

async function addQuestion(req, res){
    try {
        let question = await Question.create(req.body)
        res.status(201).json(question)
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}

async function getAllQuestions(req, res){
    try {
        let questions = await Question.find()
        res.status(200).json(questions)
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}

module.exports = {
    addQuestion,
    getAllQuestions
}