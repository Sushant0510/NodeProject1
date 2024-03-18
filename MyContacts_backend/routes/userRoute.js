const express= require("express");
const router=express.Router();

router.post("/register",(req,res)=>{
    res.json({message:"Register the user"});
});


router.post("/login",(req,res)=>{
    res.json({message:"login successfull"});
});


module.exports= router;

