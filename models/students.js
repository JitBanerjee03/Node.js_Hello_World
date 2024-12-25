const mongoose=require('mongoose');
const { type } = require('os');
const { float } = require('webidl-conversions');

const studentSchema=mongoose.Schema({  //defining the schema
    firstName:{
        type:String,
        required:true
    },

    middleName:{
        type:String,
        required:false
    },

    lastName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        unique:true,
        required:true
    },

    projectUnderTaken:{
        type:String,
        enum:['Machine Learning','Data Science','Web Development','Cyber Security','Computer Networking','VLSI Design','Robotics','Soft Computing','Bio Informatics'],
        required:true
    },

    cgpa:{
        type:Number,
        required:true
    },

    age:{
        type:Number,
        default:18
    },

    allottedSupervisor:{
        type:String,
        enum:['UM','MSB','CC','RS','CKM','NB','JKS']
    },

    phoneNumber:{
        type:Number,
        unique:true,
        required:true
    },
})

const studentModel=mongoose.model('student',studentSchema);  //creating the student model

module.exports=studentModel;