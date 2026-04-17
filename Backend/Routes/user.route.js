import express from 'express'

const userRouter=express.Router()

import userController from "../controller/user.controller.js"

userRouter.post("/signup",userController.createUser)
userRouter.post("/signin",userController.signinUser)
userRouter.post("/isLoginOut",userController.loginout)
userRouter.post("/logout",userController.Logout)
userRouter.patch("/Cart",userController.Cart)
userRouter.post("/CartGetter",userController.CartGetter)
userRouter.delete("/CartDelete",userController.CartDelete)
userRouter.post("/Order",userController.Order)
userRouter.post("/OrderGetter",userController.OrderGetter)

export default userRouter   