import mongoose  from "mongoose";

const AdminSignupSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    emailAddress:String,
    phoneNumber:Number,
    password:String
})

const AdminSignUp = mongoose.model("AdminSignup",AdminSignupSchema)

export default AdminSignUp