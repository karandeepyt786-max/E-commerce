import express from 'express'

const userRouter=express.Router()

import userController from "../controller/user.controller.js"

userRouter.post("/Signup",userController.createUser)
userRouter.post("/Signin",userController.signinUser)
userRouter.post("/isLoginOut",userController.loginout)
userRouter.post("/Logout",userController.Logout)

export default userRouter