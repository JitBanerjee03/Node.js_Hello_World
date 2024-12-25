const mongoose=require('mongoose');
require('dotenv').config()

const mongoURL=process.env.MONGO_URL;

mongoose.connect(mongoURL);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Data base is connected");
})

db.on('error',()=>{
    console.log("some error occured in the data base connection");
})

db.on('disconnected',()=>{
    console.log("Database is disconnected");
})

module.exports=db;