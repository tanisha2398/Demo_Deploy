var express=require("express");
var app=express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/about",(req,res)=>{
    res.render("about");
});


const port=3003;
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});