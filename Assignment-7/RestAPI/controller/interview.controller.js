const mongoose = require('mongoose')

const Interview = require('../model/interview.model')

async function addInterview(req, res){
    try {
        let interview = await Interview.create(req.body)
        res.status(201).json(interview)
    } catch (error) {
        console.log(error);
        res.status(400).json({"message": error.message})
    }
}

async function allInterviews(req, res){
    try {
        let interviews = await Interview.find()
        res.status(200).json(interviews)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}


module.exports = {
    addInterview,
    allInterviews
}