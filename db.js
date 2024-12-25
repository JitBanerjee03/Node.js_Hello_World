const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/College',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

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