import express from 'express'

const AdminRouter=express.Router()

import path from "path"

import AdminController from "../controller/admin.controller.js"

import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(),"Public/Images/uploads/"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

AdminRouter.post("/Signup",AdminController.createAdmin)
AdminRouter.post("/Signin",AdminController.signinAdmin)
AdminRouter.post("/isLoginOut",AdminController.loginoutAdmin)
AdminRouter.post("/Logout",AdminController.Logout)
AdminRouter.post("/CreateProduct",upload.single("ProductImage"),AdminController.CreateProduct)
AdminRouter.get("/GetAllProducts",AdminController.GetAllProducts)
AdminRouter.post("/GetOneProduct",AdminController.GetOneProduct)

export default AdminRouter