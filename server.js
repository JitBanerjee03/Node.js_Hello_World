const express=require('express');
const db=require('./db');
const bodyParser=require('body-parser');
const course=require('./models/course');
const app=express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//routing endpoints for student
const routerStudent=require('./routes/studentRoutes');
app.use('/students',routerStudent);

//routing endpoints for the teachers
const teacherRoutes=require('./routes/teacherRoutes');
app.use('/',teacherRoutes);

app.listen(3000,()=>{
    console.log("Server is live now");
})