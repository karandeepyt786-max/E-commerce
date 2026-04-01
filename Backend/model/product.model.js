import mongoose  from "mongoose";

const Product=new mongoose.Schema({
    ProductCreatorEmail:String,
    ProductBrand:String,
ProductName:String,
ProductPrice:Number,
ProdutCateory:String,
ProductSale:Number,
ProductRating:Number,
ProductReviews:Number,
ProductStock:Number,
SizeAvailable:[],
ColorAvailable:[],
Tags:[]
})

const AdminSignUp = mongoose.model("AdminSignup",AdminSignupSchema)

export default AdminSignUp