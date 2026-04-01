import express from 'express'

const userRouter=express.Router()

import userController from "../controller/user.controller.js"

userRouter.post("/signup",userController.createUser)
userRouter.post("/signin",userController.signinUser)
userRouter.post("/isLoginOut",userController.loginout)
userRouter.post("/logout",userController.Logout)

export default userRouter