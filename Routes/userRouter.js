const express = require('express')
const userRouter = express.Router()
const userController = require('../Controllers/userController')

userRouter.get('/', userController.getUsers)

module.exports = {
    userRouter

}