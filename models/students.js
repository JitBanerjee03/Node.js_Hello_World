const mongoose=require('mongoose');
const { type } = require('os');
const { float } = require('webidl-conversions');
const bcrypt=require('bcrypt');

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

    userName:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    }
})

studentSchema.pre('save',async function(next){
    const student=this;
    try{
        if(!student.isModified('password')){
            next();
        }else{
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(student.password,salt); 
            student.password=hashedPassword;
            next();
        }
    }catch(err){
        next(err);
    }
})

studentSchema.methods.studentSchema=async (userPassword)=>{
    try{
        const isTrue= await bcrypt.compare(userPassword,this.password);

        return isTrue;
    }catch(err){
        throw err;
    }
}
const studentModel=mongoose.model('student',studentSchema);  //creating the student model

module.exports=studentModel;