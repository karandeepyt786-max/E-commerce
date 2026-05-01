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
  cloud_name: "dmgfdlixw",
  api_key: "447866952441655",
  api_secret: "Wb_BOmtpRCgrnvwtFuUFBO6r3fU",
});
let UploadingPath = path.join(
  process.cwd(),
  "Public/Images/uploads/1774914907559-Luffy.jpg",
  
);

// uploadImage(UploadingPath);

// emptyDirectory(dirPath);

//Middleware
app.use(cors({ origin: "https://e-commerce-frontend-3-494c.vercel.app", credentials: true }));
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

app.listen(process.env.SERVER_PORT);


// CONNECTION_URL=mongodb://localhost:27017/   
// SERVER_PORT=3000