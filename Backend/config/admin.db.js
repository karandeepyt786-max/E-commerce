import mongoose, { connect } from "mongoose";

const AdminConnection=async()=>{
    try{
   await mongoose.connect(process.env.ADMIN_DB_CONNECTION)
    console.log("Admin Connection Success")
}
catch(err){
    console.log("error occured")
}
}

export default AdminConnection