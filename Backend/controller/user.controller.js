import userSignUp from "../model/user.signup.model.js"
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"


 userSignUp()
 
const createUser=async(req,res)=>{
const{firstName,lastName,Email,Phone,Password}=req.body

const salt=await bcrypt.genSalt(10)

const hash=await bcrypt.hash(Password,salt)

const isExist=await userSignUp.findOne({emailAddress:Email})

let token=jwt.sign({email:Email},"key")

// const compare=await bcrypt.compare("z","$2b$10$qXlC.5AIUmvHWooXTN98Te4cvmPz8OVBz5pLHpLZa14x.IiUrEeXi")

// console.log("compare ",compare)




if(hash && !isExist){
    const User=await userSignUp.create({
    firstName,
    lastName,
    emailAddress:Email,
    phoneNumber:Phone,
    password:hash
})


console.log("user created")
res.cookie("token",token,{
    httpOnly: true,    // Required for security
    secure: false,     // REQUIRED for http://localhost (Chrome blocks 'true' on HTTP)
    sameSite: 'lax',   // REQUIRED for cross-port (5173 to 3000)
    path: '/',         // REQUIRED to make it available to all routes
}   )
res.status(200).send("user created")
}
else{
    console.log("already exist")
    res.status(300).send("user already exist ")
}

}

const signinUser=async(req,res)=>{
 const{Email,Password} = req.body
 const isEmailExist=await userSignUp.findOne({emailAddress:Email})

if(isEmailExist){
let ispassword=await bcrypt.compare(Password,isEmailExist.password)
if(isEmailExist && ispassword){
    console.log("authorization succeed")
}
else{
    console.log("Email and Password not match")
}
}
else{
    res.status(300).send("Email and Password not match")
}

 console.log("Email exist ",req.body,isEmailExist)
}

const loginout=async(req,res)=>{
// console.log("token is ",req.cookies.token)

let Istoken=jwt.verify(req.cookies.token,"key")

// console.log(Istoken.email)

let userdata=await userSignUp.findOne({emailAddress:Istoken.email})

if(Istoken){
res.status(200).send({data:userdata})
}
else{
    res.status(401).send("Invalid token")

}

}

const Logout=async(req,res)=>{
    res.cookie("token","")
    res.status(200).send("successfully delete the cookie")
}

export default {createUser,signinUser,loginout,Logout}

// from usre  {
//   firstName: 's',
//   lastName: 's',
//   Email: 's',
//   Phone: '1111111111',
//   Password: 's',
//   confirmPassword: 's'
// }