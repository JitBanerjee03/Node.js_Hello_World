const passport=require('passport');
const localStrategy=require('passport-local').Strategy;  //it is username and passward based authentication middleware system 
const student=require('./models/students');

//middleware for authentication
passport.use(new localStrategy(async (username,password,done)=>{
    try{
        const responseData= await student.findOne({userName:username});

        if(!responseData){
            console.log("Invalid username !");
            return done(null,false,{message:"Invalid username"});
        }else{
            const isCorrectPassword=await student.isMatchedPassword(password);

            if(isCorrectPassword){
                console.log("You are a valid user !");
                return done(null,responseData);
            }else{
                console.log("Inavlid password given !");
                return done(null,false,{message:"Invalid Password"})
            }
        }
    }catch(err){
        console.log("error occured in authentication");
        return done(err);
    }
}))

module.exports=passport;