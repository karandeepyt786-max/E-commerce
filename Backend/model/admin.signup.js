import mongoose  from "mongoose";

const AdminSignupSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  phoneNumber: Number,
  password: String,

  ProductsCreated: [
    {
      ProductCreatorEmail: String,
      ProductBrand: String,
      ProductName: String,
      ProductImage: String,
      ProductPrice: Number,
      ProductCategory: String, // ✅ fixed typo
      ProductSale: { type: Number, default: 0 },
      ProductRating: { type: Number, default: 0 },
      ProductReviews: { type: Number, default: 0 },
      ProductStock: { type: Number, default: 0 },
ProductQuantity:{type:Number,default:1},
      SizeAvailable: [String],   // ✅ fixed
      ColorAvailable: [String],  // ✅ fixed
      Tags: [String],             // ✅ fixed
      DiscountCode:Number
    }
  ]
});
const AdminSignUp = mongoose.model("AdminSignup",AdminSignupSchema)

export default AdminSignUp