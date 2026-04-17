import mongoose from "mongoose";

const ProductSchem = new mongoose.Schema({
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
  ProductQuantity: { type: Number, default: 1 },
  SizeAvailable: [String], // ✅ fixed
  ColorAvailable: [String], // ✅ fixed
  Tags: [String], // ✅ fixed
  DiscountCode: Number,
});

const ProductsSchema = mongoose.model("Products", ProductSchem);

export default ProductsSchema;
