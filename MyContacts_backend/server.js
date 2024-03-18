const express= require('express')
const dotenv=require("dotenv").config();
const errorHandler= require("./middleware/errorHandler");
const connectDb = require('./config/dbConnection');
const app=express();
const port= process.env.port||5000;


connectDb();
app.use(express.json());

app.use("/api/contacts",require("./routes/contacRoute"));
app.use("/api/users",require("./routes/userRoute"));

app.use(errorHandler);
app.listen(port,()=>{
    console.log(`sever running on port ${port}`);
});

// console.log("I am in express project")

// app.get("/api/contacts",(req,res)=>{
//     res.send("get all contacts");
// })

// app.get("/api/contacts",(req,res)=>{
//     res.json({message:"get all contacts"});
// })

// app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"get all contacts"});
// })

