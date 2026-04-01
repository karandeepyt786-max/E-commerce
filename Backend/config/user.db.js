import mongoose, { connect } from "mongoose";

const Connection=async()=>{
    try{
   await mongoose.connect(process.env.USER_DB_CONNECTION)
    console.log("Connection Success")
}
catch(err){
    console.log("error occured")
}
}

export default Connection