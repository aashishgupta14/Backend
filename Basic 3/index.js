import express from "express"
import mongoose from "mongoose";
import User from "./models/user.model.js";

const app=express();
const port=7000;
const mongoUrl="mongodb+srv://aashish:aashish123@cluster0.wfmmagh.mongodb.net/AashishGupta"
app.get("/",(req,res)=>{
    res.send("hello from server")
})

app.post("/create",async(req,res)=>{
    try {
        let{name,age,email,userName}=req.body
     let newUser= await User.create({
        name,
        age,
        email,
        userName
})
      return res.status(201).json({message:"user is created"})
    } catch (error) {
      return  res.status(400).json({message:"error"})
    }
})
app.listen(port,()=>{
    console.log(`server is started at ${port}`);
    
})