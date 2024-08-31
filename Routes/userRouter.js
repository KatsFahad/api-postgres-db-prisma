const express = require('express')
const userRouter = express.Router()
const userController = require('../Controllers/userController')
const validateToken = require('../Utilities/validateToken')

userRouter.get('/', validateToken, userController.getUsers)

userRouter.post('/login', userController.loginUser)

module.exports = {
    userRouter

}