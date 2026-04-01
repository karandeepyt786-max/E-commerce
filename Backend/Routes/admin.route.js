import express from 'express'

const AdminRouter=express.Router()

import AdminController from "../controller/admin.controller.js"

AdminRouter.post("/Signup",AdminController.createAdmin)
AdminRouter.post("/Signin",AdminController.signinAdmin)
AdminRouter.post("/isLoginOut",AdminController.loginoutAdmin)
AdminRouter.post("/Logout",AdminController.Logout)

export default AdminRouter