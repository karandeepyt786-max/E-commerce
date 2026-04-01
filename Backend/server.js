//Express Main Package
import express from "express"
const app=express()

//other Packages
import cors from "cors"
import cookieParser from "cookie-parser"

//Config Packages
import "dotenv/config.js"

//Routes
import UserRoute from "./Routes/user.route.js"
import AdminRoute from "./Routes/admin.route.js"

//DB Connection
import Connection from "./config/user.db.js"
import AdminConnection from "./config/admin.db.js"
Connection()
AdminConnection()

//Middleware
app.use(cors({origin:"http://localhost:5173",credentials:true},))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use("/User",UserRoute)
app.use("/Admin",AdminRoute)
app.use("/",(req,res)=>{res.send("hlo")})

app.listen(process.env.SERVER_PORT)