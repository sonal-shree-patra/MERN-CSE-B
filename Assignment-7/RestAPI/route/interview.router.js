const express = require('express')

const {
    addInterview,
    allInterviews,
    getInterviewById,
    updateInterview,
    deleteInterview,
    allDetails,
    interviewDetails
} = require('../controller/interview.controller')

const interviewRouter = express.Router()

interviewRouter.get("/", allInterviews)
interviewRouter.post("/", addInterview)
interviewRouter.get("/details", allDetails)
interviewRouter.get("/details/:iid", interviewDetails)
interviewRouter.get("/:id", getInterviewById)
interviewRouter.put("/:id", updateInterview)
interviewRouter.delete("/:id", deleteInterview)

module.exports = interviewRouter