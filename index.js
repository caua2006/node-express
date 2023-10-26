const express = require("express");
const app = express();

const path = require("path");

const caminhoBase = path.join(__dirname,"templates")

app.listen(3000,()=>{
    console.log("Server running port 3000")
})

app.get('/',(req,res)=>{
    res.sendFile(`${caminhoBase}/index.html`)
})