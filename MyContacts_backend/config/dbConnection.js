const mongooose= require('mongoose');

const connectDb= async()=>{
    try{

        const connect= await mongooose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected: ",
        connect.connection.host,connect.connection.name);
    }catch(err){

    }
}

module.exports=connectDb;