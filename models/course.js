const mongoose=require('mongoose');

const courseSchema=mongoose.Schema({  //defining the schema
    courseId:{
        type:Number,
        unique:true
    },

    courseName:{
        type:String,
        required:true
    },

    intakeCapacity:{
        type:Number,
        required:false
    }
})

const courseModel=mongoose.model('course',courseSchema);  //creating the student model

module.exports=courseModel;