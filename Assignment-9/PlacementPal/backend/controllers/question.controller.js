const QuestionModel = require('../models/question.model')

const addQuestion = async(req, res) =>{
    try {
        const question = await QuestionModel.create(req.body)
        res.status(201).json(question)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getAllQuestions = async(req, res) => {
    try{
        const questions = await QuestionModel.find()
        res.status(200).json(questions)
    } catch(error){
        res.status(500).json(error)
    }
}

const updateQuestion = async(req, res) => {
    try {
        const { id } = req.params
        const question = await QuestionModel.findOneAndUpdate({"_id": id}, req.body, {new: true})
        if(question){
            res.status(200).json(question)
        } else {
            res.status(404).json({"message": "Record not found"})
        }
    } catch (error) {
        if(error.name === "CastError"){
            res.status(400).json({"message": "Invalid Id"})
        } else {
            res.status(500).json(error)
        }
    }
}

const deleteQuestion = async(req, res)=>{
    try {
        const { id } = req.params
        const question = await QuestionModel.findOneAndDelete({"_id": id})
        if(question){
            res.status(200).json(question)
        } else {
            res.status(404).json({"message": "Record not found"})
        }
    } catch (error) {
        if(error.name === "CastError"){
            res.status(400).json({"message": "Invalid Id"})
        } else {
            res.status(500).json(error)
        }
    }
}


module.exports = {
    addQuestion,
    getAllQuestions,
    updateQuestion,
    deleteQuestion
}