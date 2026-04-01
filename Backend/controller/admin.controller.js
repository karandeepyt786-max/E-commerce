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

// const compare=await bcrypt.compare("z","$2b$10$qXlC.5AIUmvHWooXTN98Te4cvmPz8OVBz5pLHpLZa14x.IiUrEeXi")

// console.log("compare ",compare)



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



const CreateProduct=async(req,res)=>{

 try {
    const {
      BrandName,
      ProductName,
      ProductPrice,
      ProductCategory,
      CreatorAdmin,
      Size,
      ProductColors,
      ProductCode,
      ProductStock,
       ProductTags
    } = req.body;

    // ✅ check image
    if (!req.file) {
      return res.status(400).send("Product image is required");
    }

    // ✅ create image path (frontend will use this)
    const imagePath = `${req.file.filename}`;

    // let Allusers=await AdminSignUp.findOne()

    // console.log("Admin Products are ",Allusers)
    await AdminSignUp.updateOne(
      { emailAddress: CreatorAdmin },
      {
        $push: {
          ProductsCreated: {
            ProductCreatorEmail: CreatorAdmin,
            ProductBrand: BrandName,
            ProductName: ProductName,
            ProductImage: imagePath, // ✅ added here
            ProductPrice: ProductPrice,
            ProductCategory: ProductCategory, // ✅ fix typo
            ProductSale: 0,
            ProductRating: 0,
            ProductReviews: 0,
            ProductStock: ProductStock,
            SizeAvailable: Size,
            ColorAvailable: ProductColors,
            Tags: ProductTags,
            DiscountCode:ProductCode,
          }
        }
      }
    );

    res.status(200).send("Product created successfully");
  } catch (err) {
    console.log("Create Product Error:", err);
    res.status(500).send("Server error");
  }
console.log("everything about creation ",req.body)
}

const GetAllProducts=async(req,res)=>{
try{
const admins = await AdminSignUp.find();

const allProducts = admins.flatMap((admin) => (admin.ProductsCreated))
// console.log(admins[0].ProductsCreated[0].ProductPrice)

res.send(allProducts);
}
catch(err){
    res.send("getallproducts errr is ",err)
}

}

const GetOneProduct=async(req,res)=>{

  // const OneUser=await AdminSignUp.find()

const{ProductName}=req.body

try{
  const Alladmins=await AdminSignUp.find({},{ProductsCreated:1})
const AllProduct=Alladmins.flatMap((admin)=>(admin.ProductsCreated)).find((p) => p.ProductName === ProductName);
res.send(AllProduct)
}

catch(error){

  console.log("One Product Errror")
}
}



export default {createAdmin,signinAdmin,loginoutAdmin,Logout,CreateProduct,GetAllProducts,GetOneProduct}

// everything about creation  [Object: null prototype] {
  //   BrandName: 'dvsdvs',
  //   ProductName: 'aqswswd',
  //   ProductPrice: '111',
//   CreatorAdmin: 'karan',
//   ProductCategory: 'Clothes',

//   Size: [ 'S', 'M', 'L', 'XL' ],
//   ProductColors: [
//     'red   ', 'blue  ',
//     'green ', 'pink  ',
//     'gray  ', 'black ',
//     'orange', 'cyan  ',
//     'cyan  '
//   ],
//   ProductCode: '14005678352210',
//   ProductStock: '2'
// }