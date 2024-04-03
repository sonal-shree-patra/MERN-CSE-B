const  mongoose  = require('mongoose')
const InterviewModel = require('../models/interview.model')
const getAllInterviews = async(req, res)=>{
    try {
        const interviews = await InterviewModel.find()
        res.status(200).json(interviews)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addInterview = async (req, res)=>{
    // const data = req.body
    // console.log(data);
    try {
        let interview = await InterviewModel.create(req.body)
        // const {company, date, location, position, broadArea, isFresher} = req.body
        // const interview = await InterviewModel.create({
        //     companyName: company,
        //     interviewDate: date,
        //     place: location,
        //     role: position,
        //     broadArea: broadArea,
        //     isFresher: isFresher
        // })
        res.status(201).json(interview)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getInterviewById = async(req, res)=>{
    // const data = req.params
    try {
        const { id } = req.params
        console.log(id);
        const interview = await InterviewModel.find({"_id": id})
        if(interview.length >0){
            res.status(200).json(interview)
        } else {
            res.status(404).json({"message": "Record not found. Check ID and try again."})
        }
    } catch (error) {
        if(error.name === "CastError"){
            res.status(400).json({"message": "Invalid Id"})
        } else {
            res.status(500).json(error)
        }
    }
}

const updateInterview = async(req, res)=>{
    try {
        const { id } = req.params
        const interview = await InterviewModel.findOneAndUpdate({"_id": id}, req.body, {new: true})
        if(interview){
            res.status(200).json(interview)
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

const deleteInterview = async(req, res)=>{
    try {
        const { id } = req.params
        const interview = await InterviewModel.findOneAndDelete({"_id": id})
        if(interview){
            res.status(200).json(interview)
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

const getInterviewDetails = async (req, res) => {
    try {
        const { id } = req.params
        const details = await InterviewModel.aggregate([
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
                    _id: new mongoose.Types.ObjectId(String(id))
                }
            }
        ])
        if(details){
            res.status(200).json(details)
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
    getAllInterviews,
    addInterview,
    getInterviewById,
    updateInterview,
    deleteInterview,
    getInterviewDetails
}