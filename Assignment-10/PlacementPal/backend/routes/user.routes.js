const express = require('express')

const {
    addUser,
    loginUser
} = require('../controllers/user.controller')

const userRouter = express.Router()

userRouter.post("/signup", addUser)
userRouter.post("/signin", loginUser)

module.exports = userRouter