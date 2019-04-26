
const express =require("express");
const app=express();
app.get("/api/info",(req,res)=>{
    res.json({
        name:'bigdeal',
        age:99,
        msg:"great"
    })
})
app.listen("9999")