import mongoose, { connect } from "mongoose";

const Connection=async()=>{
    try{
   await mongoose.connect(process.env.CONNECTION_URL)
    console.log("Connection Success")
}
catch(err){
    console.log("error occured")
}
}

export default Connection