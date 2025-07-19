import express from "express"
import cors from "cors"
const app=express();
const port =8000;

app.use(express.json());
app.use(cors());


app.get("/about",(req,res)=>{
    res.end("hello word")
})

app.get("/",(req,res)=>{
    res.json({message:`hello from backend`})
})

app.listen(port,()=>{
    console.log(`server is started at ${port}`)
})