import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    userName:{
        type:String,
        require:true,
        unique:true
    }

},{timestamps:true})

const User=mongoose.model("User",userSchema)
export default User