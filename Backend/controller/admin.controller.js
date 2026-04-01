import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import AdminSignUp from '../model/admin.signup.js'


 AdminSignUp()
 
const createAdmin=async(req,res)=>{
const{firstName,lastName,Email,Phone,Password}=req.body

console.log("Admin data ",firstName)

const salt=await bcrypt.genSalt(10)

const hash=await bcrypt.hash(Password,salt)

const isExist=await AdminSignUp.findOne({emailAddress:Email})

let token=jwt.sign({email:Email},"key")

const compare=await bcrypt.compare("z","$2b$10$qXlC.5AIUmvHWooXTN98Te4cvmPz8OVBz5pLHpLZa14x.IiUrEeXi")

console.log("compare ",compare)



if(hash && !isExist){
    const User=await AdminSignUp.create({
    firstName,
    lastName,
    emailAddress:Email,
    phoneNumber:Phone,
    password:hash
})


console.log("user created")
res.cookie("Admintoken",token,{
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

const signinAdmin=async(req,res)=>{
 const{Email,Password} = req.body

 

 const isEmailExist=await AdminSignUp.findOne({emailAddress:Email})

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

const loginoutAdmin=async(req,res)=>{
// console.log("token is ",req.cookies.token)

let Istoken=jwt.verify(req.cookies.Admintoken,"key")

// console.log(Istoken.email)

let userdata=await AdminSignUp.findOne({emailAddress:Istoken.email})

if(Istoken){
res.status(200).send({data:userdata})
}
else{
    res.status(401).send("Invalid token")

}

}

const Logout=async(req,res)=>{
    res.cookie("Admintoken","")
    res.status(200).send("successfully delete the cookie")
}

export default {createAdmin,signinAdmin,loginoutAdmin,Logout}

// from usre  {
//   firstName: 's',
//   lastName: 's',
//   Email: 's',
//   Phone: '1111111111',
//   Password: 's',
//   confirmPassword: 's'
// }