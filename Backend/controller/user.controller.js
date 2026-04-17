import userSignUp from "../model/user.signup.model.js";
import adminSignups from "../model/admin.signup.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { ObjectId } from "bson";
userSignUp();

const createUser = async (req, res) => {
  const { firstName, lastName, Email, Phone, Password } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(Password, salt);

  const isExist = await userSignUp.findOne({ emailAddress: Email });

  let token = jwt.sign({ email: Email }, "key");

  // const compare=await bcrypt.compare("z","$2b$10$qXlC.5AIUmvHWooXTN98Te4cvmPz8OVBz5pLHpLZa14x.IiUrEeXi")

  // console.log("compare ",compare)

  if (hash && !isExist) {
    const User = await userSignUp.create({
      firstName,
      lastName,
      emailAddress: Email,
      phoneNumber: Phone,
      password: hash,
    });

    console.log("user created");
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });
    return res
      .status(200)
      .json({ status: 200, message: "user created", user: User, Email: Email });
  } else {
    console.log("already exist");
    return res.status(409).json({ status: 409, message: "user already exist" });
  }
};

const signinUser = async (req, res) => {
  const { Email, Password } = req.body;
  const isEmailExist = await userSignUp.findOne({ emailAddress: Email });

  if (isEmailExist) {
    let ispassword = await bcrypt.compare(Password, isEmailExist.password);
    if (isEmailExist && ispassword) {
      console.log("authorization succeed");
    } else {
      console.log("Email and Password not match");
    }
  } else {
    res.status(300).send("Email and Password not match");
  }

  console.log("Email exist ", req.body, isEmailExist);
};

const loginout = async (req, res) => {
  console.log("token is ", req.cookies.token);

  let Istoken = jwt.verify(req.cookies.token, "key");

  console.log(Istoken.email);

  let userdata = await userSignUp.findOne({ emailAddress: Istoken.email });

  if (Istoken) {
    res.status(200).send({ data: userdata });
  } else {
    res.status(401).send("Invalid token");
  }
};

const Logout = async (req, res) => {
  res.cookie("token", "");
  res.status(200).send("successfully delete the cookie");
};

const Cart = async (req, res) => {

  const {Productid,ProductSize,Color,ProductQuantity,Wrap}=req.body
console.log("data is ",Productid,ProductSize,Color,ProductQuantity,Wrap)

 console.log("Cart is ",req.body)


let ProuData=await userSignUp.findOne({emailAddress:req.body.Email})

const productfind=ProuData.Cart.map((ite)=>(
  ite.ProductDataById.toString()==Productid?true:false
))

console.log("productfind is ",productfind)

let isok=productfind.includes(true)

console.log("isokay is ",isok)

if(!isok || ProuData.Cart.length==0 ){

try{
let IsEmailExist=await userSignUp.findOne({emailAddress:req.body.Email})
if(IsEmailExist){
 await userSignUp.updateOne(
  { emailAddress: req.body.Email },   // find user
  {
    $push: {
      Cart: {
        ProductDataById: req.body.Productid,
        Size: req.body.ProductSize,
        Color: req.body.Color,
        ProductQuantity: req.body.ProductQuantity,
        Wrap:Wrap
      }
    }
  }
);
  console.log("exist")
}
else{
  console.log("not exist")

}
}
catch(err){
  console.log("Cart error is ",err)
}
console.log(" not find")

}
else{
  
await userSignUp.updateOne(
  {
    emailAddress: req.body.Email,
    "Cart.ProductDataById": req.body.Productid
  },
  {
    $set: {
      "Cart.$.ProductDataById": req.body.Productid,
      "Cart.$.Size": req.body.ProductSize,
      "Cart.$.Color": req.body.Color,
      "Cart.$.ProductQuantity": req.body.ProductQuantity,
       "Cart.$.Wrap":Wrap
    }
  }
);

// console.log("updateProduct is ",updateProduct)

}




};

const CartDelete = async (req, res) => {
  const { Email, ProductId } = req.body;

  console.log(Email,ProductId)



  try {
    const result = await userSignUp.updateOne(
  { emailAddress: Email },
  {
    $pull: {
      Cart: {
        _id: ProductId
      }
    }
  }
);

    console.log("deleted:", result);

    res.json({ success: true, result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

const CartGetter=async(req,res)=>{
 console.log("CartGetter ",req.body)
  console.log("CartGetter ",req.body.Email)
  try{




const data=await userSignUp.findOne( {emailAddress: req.body.Email}).populate("Cart.ProductDataById");


console.log("Crt data is ",data)
res.send(data)  
  }
  catch(err){
    console.log("the error from the cartgetter is ",err)
  }
}

const Order=async(req,res)=>{
  const {Size,Color,ProductQuantity,Wrap}=req.body.ProductData
  const Productid=req.body.ProductData.ProductDataById._id
  
  
  // console.log("order data is  ",req.body,Email,UnitedState,FirstName,Last,Adress,City,Postal,SaveForFuture,CreditCard,CardNumber,CardExpire,Security,CardHolder,DiscountCode)
  // console.log(Size,Color,ProductQuantity,Wrap)
  
  const {Email,UnitedState,FirstName,Last,Adress,City,Postal,SaveForFuture,CreditCard,CardNumber,CardExpire,Security,CardHolder,DiscountCode}=req.body.UserAllInformation

  try {
  await userSignUp.updateOne(
    { emailAddress: Email },
    {
      $push: {
        Orders: {
          ProductData: {
            ProductDataById: Productid,
            Size: Size,
            Color: Color,
            ProductQuantity: ProductQuantity,
            Wrap: Wrap
          },

          customer: {
            firstName: FirstName,
            lastName: Last,
            email: Email
          },

          shippingAddress: {
            address: Adress,
            city: City,
            country: UnitedState,
            postalCode: Postal
          },

          payment: {
            method: CreditCard,
            ShippingAmount:40,
            status: "Completed" // ✅ NOT String
          }
        }
      }
    }
  );
} catch (err) {
  console.log("Error while Adding order ", err);
}

  
}

const OrderGetter=async(req,res)=>{
console.log("order getter ",req.body.Email)

  try{




const data = await userSignUp.aggregate([
  { $match: { emailAddress: req.body.Email } },

  { $unwind: "$Orders" },
  { $unwind: "$Orders.ProductData" },

  {
    $lookup: {
      from: "products", // your product collection name
      localField: "Orders.ProductData.ProductDataById",
      foreignField: "_id",
      as: "productDetails"
    }
  },

  { $unwind: "$productDetails" },

  {
    $project: {
      _id: 0,
      product: "$productDetails",
      Size: "$Orders.ProductData.Size",
      Color: "$Orders.ProductData.Color",
      ProductQuantity: "$Orders.ProductData.ProductQuantity",
      Wrap: "$Orders.ProductData.Wrap"
    }
  }
]);



res.send(data)
  }
catch(err){
  console.log("orderdata send error is ",err)
}

}





export default { createUser, signinUser, loginout, Logout, Cart,CartGetter,CartDelete,Order,OrderGetter };

// from usre  {
//   firstName: 's',
//   lastName: 's',
//   Email: 's',
//   Phone: '1111111111',
//   Password: 's',
//   confirmPassword: 's'
// }

// D:\Coading\NewReactProject\Backend\server.js
//   53,24: app.listen(process.env.SERVER_PORT)





















//  const { CartDataIs } = req.body;
  
//   console.log("body of cart is ",req.body.ProductImage)

//   if(req.body.Email){
//     const updata = await userSignUp.findOne({ emailAddress: req.body.Email });
//     res.send(updata)
//   }

//   const FindName=req.body.CartDataIs[0].ProductName

//   if(CartDataIs){
// try {

//   const IsExist=await userSignUp.aggregate([
//    {$match: {emailAddress: req.body.Email} },
//    {$unwind:"$Cart" },
//    {$match:{"Cart.ProductName":FindName}}
//   ])

// // console.log("IsExist ",IsExist)

// if(IsExist.length==0){
//      const up = await userSignUp.updateOne(
//       { emailAddress: req.body.Email },
//       {
//         $push: {
//           Cart: CartDataIs[0],
//         },
//       },
//     );
// }
// else{

// const updatedItem = {
//   ...req.body.CartDataIs[0],
//   ProductImage: req.body.ProductImage
// };

// const dats=await userSignUp.updateOne(
//       { emailAddress: req.body.Email,
//         "Cart.ProductName":FindName
//        },
//       {$set:{"Cart.$":updatedItem}},
  
    
// )

// // console.log("Already exist"
// }


//   } catch (err) {
//     console.log("user cart data error ", err);
//   }
// }