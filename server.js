//Express Main Package
import express from "express";
const app = express();

//other Packages
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises"; // ✅ correct

//Config Packages
import "dotenv/config.js";

//Routes
import UserRoute from "./Routes/user.route.js";
import AdminRoute from "./Routes/admin.route.js";
import { uploadImage, emptyDirectory } from "./controller/Cloudinary.js";

//Paths
let dirPath = path.join(process.cwd(), "Public/Images/uploads/");

//DB Connection
import Connection from "./config/user.db.js";
import AdminConnection from "./config/admin.db.js";
import ProductsSchema from "./model/product.model.js";
Connection();
AdminConnection();
ProductsSchema()

//Cloud Services

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
let UploadingPath = path.join(
  process.cwd(),
  "Public/Images/uploads/1774914907559-Luffy.jpg",
  
);

// uploadImage(UploadingPath);

// emptyDirectory(dirPath);

//Middleware
const allowedOrigins = [
  "https://e-commerce-frontend-3-494c.vercel.app",
  process.env.FRONTEND_URL,
].filter(Boolean);
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  "/Products",
  express.static(path.join(process.cwd(), "Public/Images/uploads/")),
);

app.use("/user", UserRoute);
app.use("/Admin", AdminRoute);
app.use("/", (req, res) => {
  res.send("hlo");
  console.log("port is ",process.env.SERVER_PORT)
});

const PORT = process.env.SERVER_PORT || process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// CONNECTION_URL=mongodb://localhost:27017/   
// SERVER_PORT=3000