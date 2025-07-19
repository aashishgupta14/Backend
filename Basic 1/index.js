import express from "express";
const app=express()
const Port=8000

const users=[
  {
    "id": 1,
    "name": "Rahul Sharma",
    "email": "rahul.sharma@example.com",
    "age": 28,
    "role": "admin"
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "priya.verma@example.com",
    "age": 25,
    "role": "user"
  },
  {
    "id": 3,
    "name": "Amit Patel",
    "email": "amit.patel@example.com",
    "age": 32,
    "role": "user"
  },
  {
    "id": 4,
    "name": "Neha Singh",
    "email": "neha.singh@example.com",
    "age": 29,
    "role": "moderator"
  },
  {
    "id": 5,
    "name": "Karan Mehta",
    "email": "karan.mehta@example.com",
    "age": 35,
    "role": "admin"
  }
]
//single user
app.get("/",(req,res)=>{
    res.end("home")
})

//multiple users
app.get("/users",(req,res)=>{
    res.json(users)

})

//seach user 
app.get("/user/:id",(req,res)=>{
       let id= req.params.id
  let exitstingsUsers=users.find((user)=>(user.id==id))
  if( !exitstingsUsers){
     return res.end("404 users not found")
  }
  res.json( exitstingsUsers)
})



app.listen(Port)
    console.log("server is started")


// import express from "express";
// const app=express()
// const Port=8000

// app.get("/",(req,res)=>{
//     res.end("hello This is home page//////")
// })
// app.get("/about",(req,res)=>{
//     res.end("about............")
// })

// app.listen(Port)
//     console.log("server is started")







// node js
// import http from "http"
// const Port=8000
//  const server=http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.end("Welcome to the Home page ")
//     }
//    else if(req.url=="/about"){
//         res.end("Welcome to the about page ")
//     }
//     else if(req.url=="/contact"){
//         res.end("Welcome to the contact page ")
//     }
//     else{
//         res.end(" 404 server not found  ")
//     }
// })

// server.listen(Port)
// console.log("server started")