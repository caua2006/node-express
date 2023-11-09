const e = require("express");
const express = require("express");
const app = express();

const path = require("path");

const caminhoBase = path.join(__dirname,"templates")

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

app.listen(3000,()=>{
    console.log("Server running port 3000")
})

app.get('/',(req,res)=>{
    res.sendFile(`${caminhoBase}/index.html`)
})

app.get("/cadastrar",(req,res)=>{
    res.sendFile(`${caminhoBase}/cadastro.html`)
})
app.post("/cadastrar/salvar",(req,res)=>{
    const {nome,email,senha}= req.body
    console.log(nome,senha,email)
})
app.get("/user/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id)
    res.sendFile(`${caminhoBase}/usuarios.html`)
})