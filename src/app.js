const express = require("express");
const path = require("path"); 
const hbs = require("hbs");
const async = require("hbs/lib/async");
const res = require("express/lib/response");

require('dotenv').config()
 
const app = express();
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname,"../public");
const templates = path.join(__dirname,"../templates/views");
const partials = path.join(__dirname,"../templates/partials");


app.use(express.urlencoded({extended:false})) 

app.use(express.static(staticpath));
app.set("views",templates);
hbs.registerPartials(partials);

app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("datereminder");
}) 

app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.get("/chatroom",(req,res)=>{
    res.render("chatroom");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`);
})