const mongoose=require('mongoose');
require('dotenv').config()

//const mongoURL_ATLAS=process.env.MONGO_URL_ATLAS;
const mongoURL_LOCAL=process.env.MONGO_URL_LOCAL;

mongoose.connect(mongoURL_LOCAL);

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