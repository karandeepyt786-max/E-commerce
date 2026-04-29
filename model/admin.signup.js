import mongoose  from "mongoose";

  const AdminSignupSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: Number,
    password: String,


  });
const AdminSignUp = mongoose.model("Admin",AdminSignupSchema,"Admin")

export default AdminSignUp

// karandeepyt786_db_user
// karan@098765
// mongodb+srv://karandeepyt786_db_user:karan@098765@cluster0.n7pqtsz.mongodb.net/:
// mongodb+srv://karandeepyt786_db_user:<db_password>@cluster0.n7pqtsz.mongodb.net/