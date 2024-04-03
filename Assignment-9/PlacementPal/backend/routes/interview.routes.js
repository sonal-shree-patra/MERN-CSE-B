const express = require("express")

const { 
    getAllInterviews,
    addInterview,
    getInterviewById,
    updateInterview,
    deleteInterview,
    getInterviewDetails
 } = require("../controllers/interview.controller")

const interviewRouter = express.Router();

interviewRouter.get("/", getAllInterviews)
interviewRouter.post("/", addInterview)
interviewRouter.get("/:id", getInterviewById)
interviewRouter.put("/:id", updateInterview)
interviewRouter.delete("/:id", deleteInterview)
interviewRouter.get("/details/:id", getInterviewDetails)

module.exports = interviewRouter