import mongoose  from "mongoose";

const userSignupSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    emailAddress:String,
    phoneNumber:Number,
    password:String,
    Cart:[{
ProductDataById:{type:mongoose.Schema.Types.ObjectId,ref:"Products"},
Size:String,
Color:String,
ProductQuantity:Number,
Wrap:Boolean
}],

    Orders:[
{
     ProductData:{
ProductDataById:{type:mongoose.Schema.Types.ObjectId,ref:"Products"},
Size:String,
Color:String,
ProductQuantity:Number,
Wrap:Boolean
},

  customer: {
    firstName: String,
    lastName: String,
    email: String
  },

  shippingAddress: {
    address: String,
    city: String,
    country: String,
    postalCode: Number
  },

  payment: {
    method: String,
    ShippingAmount:Number,
    status: String
  }}

]
})

const userSignUp = mongoose.model("userSignup",userSignupSchema)

export default userSignUp