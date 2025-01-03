const express=require('express');
const db=require('./db');
const bodyParser=require('body-parser');
const course=require('./models/course');
const app=express();
require('dotenv').config()
const passport=require('./auth');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(passport.initialize());
const localAuthentication=passport.authenticate('local',{session:false});

app.get('/',localAuthentication,(req,res)=>{
    res.send("Wellcome to the college");
})

//routing endpoints for student
const routerStudent=require('./routes/studentRoutes');
app.use('/students',routerStudent);

//routing endpoints for the teachers
const teacherRoutes=require('./routes/teacherRoutes');
app.use('/',teacherRoutes);

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is live now");
})