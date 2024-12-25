const mongoose=require('mongoose');

const teacherSchema=mongoose.Schema({  //defining the schema
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

    reacherArea:{
        type:String,
        enum:['Machine Learning','Data Science','Web Development','Cyber Security','Computer Networking','VLSI Design','Robotics','Soft Computing','Bio Informatics'],
        required:true
    },

    phoneNumber:{
        type:Number,
        unique:true,
        required:true
    },

    yearOfExperience:{
        type:Number,
        required:true
    },

    coursesTought:{
        type:[Number],
    },

    userName:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
})

const teacherModel=mongoose.model('teacher',teacherSchema);  //creating the student model

module.exports=teacherModel;