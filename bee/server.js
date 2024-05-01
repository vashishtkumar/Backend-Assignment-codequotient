const express=require("express");
const app=express();
const fs=require("fs");

app.use(express.urlencoded({extended:false}));

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
})

app.get("/all",(req,res)=>{
fs.readdir(__dirname+"/product.json","utf-8",(err,data)=>{
res.send(data);
})
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/dashboard.html");
    })
app.post("/login",(req,res)=>{
res.sendFile(__dirname+"/dashboard.html");
})
app.listen(3000);