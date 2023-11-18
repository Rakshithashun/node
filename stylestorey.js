const express = require("express");
const app = express();
const path = require("path");

app.get("/html", (req,res)=>{
    res.sendFile(path.join(__dirname,"home.html"));

}) 
app.get("/clothes", (req,res)=>{
    res.sendFile(path.join(__dirname,"clothing.html"));

}) 
app.get("/shoes", (req,res)=>{
    res.sendFile(path.join(__dirname,"footwear.html"));

}) 

app.listen(3979  ,   ()=>{
    console.log("server is running");
})