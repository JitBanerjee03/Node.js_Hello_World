const express=require('express')

const router=express.Router();
const teacher=require('../models/teachers');

//endpoint for inserting data in the datbase 
router.post('/teachers',async(req,res)=>{
    try{
        const data=req.body;
        const teacherData=new teacher(data);

        const respondData=await teacherData.save();
        
        res.status(200).json(respondData);
        console.log("Data successfully saved in the database");
    }catch(err){
        console.log("Some error occured in teh database hence data not saved in the database");
        res.status(500).json({error:"Internal error data not saved"});
    }
})

//endpoint for fetching data from the database
router.get('/teachers',async(req,res)=>{
    try{
        const data=await teacher.find();

        console.log("Data fetched successfully");
        res.status(200).json(data);
    }catch(err){
        console.log("Some error occured in teh database hence data not fetched from the database");
        res.status(500).json({error:"Internal error data not fetched"});
    }
})

//endpoint for getting data for a perticular request  
router.get('/teachers/:r_Area',async(req,res)=>{
    try{
        const rArea=req.params.r_Area;
        const data=await teacher.find({reacherArea:rArea});

        console.log("Data fetched successfully");
        res.status(200).json(data);
    }catch(err){
        console.log("Some error occured in teh database hence data not fetched from the database");
        res.status(500).json({error:"Internal error data not fetched"});
    }
})

//endpoint for updating the details of a perticular teacher
router.put('/teachers/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const data=req.body;

        const responseData=await teacher.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        })

        if(responseData>0){
            console.log("Teacher does not exits in the database!");
            res.status(200).json({message:"Teacher does not exits in the database"});
        }else{
            console.log("Teacher data successfully updated");
            res.status(200).send(responseData);
        }
    }catch(err){
        console.log("Some error occured in teh database hence data not fetched from the database");
        res.status(500).json({error:"Internal error data not fetched"});
    }
})

//end point for deleting data from the data base
router.delete('/teachers/:id',async(req,res)=>{
    try{
        const id=req.params.id;

        const responseData=await teacher.findByIdAndDelete(id);
        if(!responseData){
            console.log("Teacher does not exits in the database");
            res.status(200).send({message:"Teacher does not exits in the database!"});
        }else{
            res.status(200).send({message:"Teacher deleted form the database"});
        }
    }catch(err){
        console.log("Some error occured in teh database hence data not fetched from the database");
        res.status(500).json({error:"Internal error data not fetched"});
    }
})
module.exports=router;