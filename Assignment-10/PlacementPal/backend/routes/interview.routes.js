const express = require("express")

const { 
    getAllInterviews,
    addInterview,
    getInterviewById,
    updateInterview,
    deleteInterview,
    getInterviewDetails
 } = require("../controllers/interview.controller");
const logger = require("../middleware/logger.middleware");
const authenticateUser = require("../middleware/auth.middleware");

const interviewRouter = express.Router();

// interviewRouter.use(logger)

interviewRouter.get("/", getAllInterviews)
// interviewRouter.get("/", logger, getAllInterviews)
interviewRouter.post("/", authenticateUser, addInterview)
interviewRouter.get("/:id", getInterviewById)
interviewRouter.put("/:id", authenticateUser, updateInterview)
interviewRouter.delete("/:id", authenticateUser, deleteInterview)
interviewRouter.get("/details/:id", getInterviewDetails)

module.exports = interviewRouter