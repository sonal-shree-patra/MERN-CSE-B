const mongoose = require('mongoose')

const Interview = require('../model/interview.model')

async function addInterview(req, res){
    try {
        // const {
        //     company, date, place, role, areas, isFresher
        // } = req.body
        let interview = await Interview.create(req.body)
        // let interview = await Interview.create({
        //     companyName: company,
        //     interviewDate: date,
        //     place: place,
        //     role: role,
        //     broadArea: areas,
        //     isFresher: isFresher
        // })
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

async function getInterviewById(req, res){
    try {
        let { id } = req.params
        let interview = await Interview.find({_id: id})
        if(interview.length >0){
            res.status(200).json(interview)
        } else {
            res.status(404).json({"message": "Data not found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function updateInterview(req, res){
    try {
        let { id } = req.params
        let data = req.body
        let interview = await Interview.findOneAndUpdate({_id: id}, data, {new: true})
        res.status(200).json(interview)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function deleteInterview(req, res){
    try {
        let { id } = req.params
        let interview = await Interview.findOneAndDelete({_id: id})
        res.status(200).json(interview)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function allDetails(req, res){
    try {
        let data = await Interview.aggregate([
            {
                $lookup: {
                    from: "questions",
                    localField: "_id",
                    foreignField: "interviewId",
                    as: "questions"
                }
            }
        ])
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function interviewDetails(req, res){
    try {
        let {iid} = req.params 
        let data = await Interview.aggregate([
            {
                $lookup: {
                    from: "questions",
                    localField: "_id",
                    foreignField: "interviewId",
                    as: "questions"
                }
            },
            {
                $match: {
                    _id : new mongoose.Types.ObjectId(String(iid))
                }
            }
        ])
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}


module.exports = {
    addInterview,
    allInterviews,
    getInterviewById,
    updateInterview,
    deleteInterview,
    allDetails,
    interviewDetails
}