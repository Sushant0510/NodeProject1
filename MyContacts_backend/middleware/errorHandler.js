const { stack } = require("../routes/contacRoute");
const {constants}= require("../constant")

const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;

    switch(statusCode){
        case constants.VALIDATION_ERROR:res.json({
            title:"Validation failed",
            message:err.message,
            stackTrace:err.stack,
        })
        break;

        case constants.NOT_FOUND:res.json({
            title:"Not Found",
            message:err.message,
            stackTrace:err.stack,
        })
        default:
          console.log("All good!")    
        break;

    }

    // res.json({message:err.message,stackTrace:err.stack});
}

module.exports= errorHandler;

