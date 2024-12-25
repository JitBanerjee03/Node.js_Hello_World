const express=require('express');
const router=express.Router();
const student=require('../models/students');

router.post('/',async(req,res)=>{
    
    try{
        const data=req.body;

        const studentData=new student(data);

        const responseData=await studentData.save();

        console.log("Data have been successfully saved in the database");
        res.status(200).json(responseData);
    }catch(err){
        console.log("Some error occured and data is not saved in the database");
        res.status(500).json({error:'Interval error occured in the server data not saved'});
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await student.find();
        console.log("Data taken form the database server");

        res.status(200).json(data);
    }catch(err){
        console.log("Some error occured and data is not fetched from the database");
        res.status(500).json({error:'Interval error occured in the server data not fetched'});
    }
})

router.get('/:field',async(req,res)=>{
    
    try{
        const fieldName=req.params.field;

        if(fieldName=='Machine Learning'|| fieldName=='Data Science' || fieldName=='Cyber Security' || fieldName=='Computer Networking' || fieldName=='VLSI Design' || fieldName=='Robotics' || fieldName=='Soft Computing' || fieldName=='Bio Informatics'){
            const data=await student.find({projectUnderTaken:fieldName});
            console.log("Data taken form the database server");

            res.status(200).json(data);
        }
    }catch(err){
        console.log("Some error occured and data is not fetched from the database");
        res.status(500).json({error:'Interval error occured in the server data not fetched'});
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const studentId=req.params.id;
        const data=req.body;

        const updatedData=await student.findByIdAndUpdate(studentId,data,{
            new : true, //return the updated document
            runValidators:true  //run the mongoose mavlidation
        });
        
        if(!updatedData){
            res.send("student does not exits!");
        }else{
            console.log("Student data updated ");
            res.status(200).json(updatedData);
        }
    }catch(err){
        console.log("Some error occured and data is not fetched from the database");
        res.status(500).json({error:'Interval error occured in the server data not fetched'});
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const studentId = req.params.id;

        // Delete the document using findOneAndDelete
        const response = await student.findByIdAndDelete(studentId);

        if (!response) {
            return res.status(404).json({ message: "User does not exist!" });
        }

        res.status(200).json({ message: "Data deleted successfully!" });
    } catch (err) {
        console.error("An error occurred:", err.message);
        res.status(500).json({ error: "Internal server error. Unable to delete data." });
    }
});


module.exports=router;