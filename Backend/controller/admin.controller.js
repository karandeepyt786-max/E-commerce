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
    let ispassword = bcrypt.compare(Password, isEmailExist.password);
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

const loginoutAdmin = async (req, res) => {
  // console.log("token is ",req.cookies.token)

  let Istoken = jwt.verify(req.cookies.Admintoken, "key");

  // console.log(Istoken.email)

  let userdata = await AdminSignUp.findOne({ emailAddress: Istoken.email });

  if (Istoken) {
    res.status(200).send({ data: userdata });
  } else {
    res.status(401).send("Invalid token");
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

    // ✅ check image
    if (!req.file) {
      return res.status(400).send("Product image is required");
    }

    // ✅ create image path (frontend will use this)
    const imagePath = `${req.file.filename}`;

    // let Allusers=await AdminSignUp.findOne()

    // console.log("Admin Products are ",Allusers)
    await ProductsSchema.create({
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
      DiscountCode: ProductCode,
    });

    res.status(200).send("Product created successfully");
  } catch (err) {
    console.log("Create Product Error:", err);
    res.status(500).send("Server error");
  }
  console.log("everything about creation ", req.body);
};

const GetAllProducts = async (req, res) => {
  console.log(req.params.id);
  console.log(req.params.sort);
  try {
    const latest = await ProductsSchema.find()
      .skip(9 * Number(req.params.id))
      .limit(9);
    req.params.sort == "latest" && res.send(latest);

    let lowprice = await ProductsSchema.find()
      .sort({ ProductPrice: 1 })
      .skip(9 * Number(req.params.id))
      .limit(9);
    req.params.sort == "low" && res.send(lowprice);

    let highprice = await ProductsSchema.find()
      .sort({ ProductPrice: -1 })
      .skip(9 * Number(req.params.id))
      .limit(9);
    req.params.sort == "high" && res.send(highprice);

    let Rating = await ProductsSchema.find()
      .sort( { ProductRating: -1 } )
      .skip(9 * Number(req.params.id))
      .limit(9);
    req.params.sort == "popular" && res.send(Rating);

    let Sales = await ProductsSchema.find()
      .sort( { ProductSale: 1 } )
      .skip(9 * Number(req.params.id))
      .limit(9);
    req.params.sort == "sales" && res.send(Sales);

  } catch (err) {
    res.send("getallproducts errr is ", err);
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
