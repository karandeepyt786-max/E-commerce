import mongoose  from "mongoose";

const userSignupSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    emailAddress:String,
    phoneNumber:Number,
    password:String
})

const userSignUp = mongoose.model("userSignup",userSignupSchema)

export default userSignUp