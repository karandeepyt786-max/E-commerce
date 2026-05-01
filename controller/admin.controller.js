import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import AdminSignUp from "../model/admin.signup.js";
import { ObjectId } from "mongodb";
import ProductsSchema from "../model/product.model.js";

AdminSignUp();

const createAdmin = async (req, res) => {
  const { firstName, lastName, Email, Phone, Password } = req.body;

  console.log("Admin data ", firstName);

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(Password, salt);

  const isExist = await AdminSignUp.findOne({ emailAddress: Email });

  let token = jwt.sign({ email: Email }, "key");

  // const compare=await bcrypt.compare("z","$2b$10$qXlC.5AIUmvHWooXTN98Te4cvmPz8OVBz5pLHpLZa14x.IiUrEeXi")

  // console.log("compare ",compare)

  if (hash && !isExist) {
    const User = await AdminSignUp.create({
      firstName,
      lastName,
      emailAddress: Email,
      phoneNumber: Phone,
      password: hash,
    });

    console.log("user created");
    res.cookie("Admintoken", token, {
      httpOnly: true, // Required for security
      secure: false, // REQUIRED for http://localhost (Chrome blocks 'true' on HTTP)
      sameSite: "lax", // REQUIRED for cross-port (5173 to 3000)
      path: "/", // REQUIRED to make it available to all routes
    });
    res.status(200).send("user created");
  } else {
    console.log("already exist");
    res.status(300).send("user already exist ");
  }
};

const signinAdmin = async (req, res) => {
  const { Email, Password } = req.body;

  const isEmailExist = await AdminSignUp.findOne({ emailAddress: Email });

  if (isEmailExist) {
    let ispassword = await bcrypt.compare(Password, isEmailExist.password);
    if (isEmailExist && ispassword) {
      console.log("authorization succeed");
      let token = jwt.sign({ email: Email }, "key");
      res.cookie("Admintoken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
      });
      return res.status(200).json({ status: 200, message: "signin success", Email: Email });
    } else {
      return res.status(300).json({ status: 300, message: "Email and Password not match" });
    }
  } else {
    return res.status(300).json({ status: 300, message: "Email and Password not match" });
  }
};

const loginoutAdmin = async (req, res) => {
  try {
    // console.log("token is ",req.cookies.token)
    if (!req.cookies.Admintoken) {
      return res.status(401).json({ status: 401, message: "No token provided" });
    }

    let Istoken = jwt.verify(req.cookies.Admintoken, "key");

    // console.log(Istoken.email)

    let userdata = await AdminSignUp.findOne({ emailAddress: Istoken.email });

    if (Istoken) {
      return res.status(200).json({ status: 200, data: userdata });
    } else {
      return res.status(401).json({ status: 401, message: "Invalid token" });
    }
  } catch (err) {
    console.log("loginoutAdmin error: ", err.message);
    return res.status(401).json({ status: 401, message: "Invalid token or error" });
  }
};

const Logout = async (req, res) => {
  res.cookie("Admintoken", "");
  res.status(200).send("successfully delete the cookie");
};

const CreateProduct = async (req, res) => {
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
      ProductTags,
    } = req.body;

    if (!req.file) {
      return res.status(400).send("Product image is required");
    }

    const imagePath = req.file.filename;

    const updatedProduct = await ProductsSchema.findOneAndUpdate(
      { ProductName: ProductName }, // 🔍 match condition
      {
        ProductCreatorEmail: CreatorAdmin,
        ProductBrand: BrandName,
        ProductName: ProductName,
        ProductImage: imagePath,
        ProductPrice: ProductPrice,
        ProductCategory: ProductCategory,
        ProductSale: 0,
        ProductRating: 0,
        ProductReviews: 0,
        ProductStock: ProductStock,
        SizeAvailable: Size,
        ColorAvailable: ProductColors,
        Tags: ProductTags,
        DiscountCode: ProductCode,
      },
      {
        new: true,      // return updated doc
        upsert: true,   // 🔥 create if not exists
      }
    );

    res.status(200).send({
      message: "Product created/updated successfully",
      product: updatedProduct,
    });

  } catch (err) {
    console.log("Create Product Error:", err);
    res.status(500).send("Server error");
  }
};

const GetAllProducts = async (req, res) => {
  console.log(req.params.id);
  console.log(req.params.sort);
  try {
    let products;
    
    if (req.params.sort == "latest") {
      products = await ProductsSchema.find()
        .skip(9 * Number(req.params.id))
        .limit(9);
    } else if (req.params.sort == "low") {
      products = await ProductsSchema.find()
        .sort({ ProductPrice: 1 })
        .skip(9 * Number(req.params.id))
        .limit(9);
    } else if (req.params.sort == "high") {
      products = await ProductsSchema.find()
        .sort({ ProductPrice: -1 })
        .skip(9 * Number(req.params.id))
        .limit(9);
    } else if (req.params.sort == "popular") {
      products = await ProductsSchema.find()
        .sort({ ProductRating: -1 })
        .skip(9 * Number(req.params.id))
        .limit(9);
    } else if (req.params.sort == "sales") {
      products = await ProductsSchema.find()
        .sort({ ProductSale: 1 })
        .skip(9 * Number(req.params.id))
        .limit(9);
    } else {
      products = await ProductsSchema.find()
        .skip(9 * Number(req.params.id))
        .limit(9);
    }

    return res.status(200).json(products);

  } catch (err) {
    console.log("getallproducts error: ", err);
    return res.status(500).json({ message: "getallproducts error: " + err.message });
  }
};

const GetOneProduct = async (req, res) => {
  // const OneUser=await AdminSignUp.find()

  const { ProductName } = req.body;

  try {
    const AllProduct = await ProductsSchema.findOne({
      ProductName: req.body.ProductName,
    });
    res.send(AllProduct);
  } catch (error) {
    console.log("One Product Errror");
  }
  console.log("get one product is ", req.body);
};

const AddSales = async (req, res) => {
  const AllAdmin = await ProductsSchema.updateMany(
    { ProductCategory: req.body.SaleCategory },
    { $set: { ProductSale: req.body.SalePercentage } },
  );

  req.body.SaleCategory == "All"
    ? await ProductsSchema.updateMany(
        {},
        {
          $set: {
            ProductSale: req.body.SalePercentage,
          },
        },
      )
    : "";
  console.log(req.body);
};

const SortingProduct = async (req, res) => {
  console.log(req.body);

  const sorteddata = await AdminSignUp.find();
  const Latest = sorteddata.flatMap((admin) => admin.ProductsCreated);
  const highPrice = sorteddata
    .flatMap((admin) => admin.ProductsCreated)
    .sort((a, b) => Number(b.ProductPrice) - Number(a.ProductPrice));
  const lowPrice = sorteddata
    .flatMap((admin) => admin.ProductsCreated)
    .sort((a, b) => Number(a.ProductPrice) - Number(b.ProductPrice));
    
  const Sales = sorteddata.flatMap((admin) =>
    admin.ProductsCreated.filter((ite) => ite.ProductSale > 0),
  );
  const popular = sorteddata.flatMap((admin) =>
    admin.ProductsCreated.filter((ite) => ite.ProductRating > 0),
  );
  console.log(Sales);

  req.body.sortBy == "Hight price" && res.send(highPrice);
  req.body.sortBy == "low price" && res.send(lowPrice);
  req.body.sortBy == "Sales" && res.send(Sales);
  req.body.sortBy == "Latest" && res.send(Latest);
  req.body.sortBy == "Popular" && res.send(popular);
};

export default {
  createAdmin,
  signinAdmin,
  loginoutAdmin,
  Logout,
  CreateProduct,
  GetAllProducts,
  GetOneProduct,
  AddSales,
  SortingProduct,
};

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
