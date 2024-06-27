
const express=require('express');
const app= express();
const PORT=5001;

//Application level middleware
//third party middleware
//router level middleware
const router=express.Router();
app.use("/api/users",router)
const fakeAuth =(req,res,next)=>{
    const authStatus=false;
    if(authStatus){
        console.log("user auth",authStatus);
        next();
    }
    else{
        res.status(401);
        throw new Error("user not authorized")
    }
}
const getUser=(req,res)=>{
    res.json({message:"get user"})
}
const createUser=(req,res)=>{
    res.json({message:"create new user"})
}
router.use(fakeAuth);
router.route('/').get(getUser).post(createUser)
//built in middleware
//error handling middleware

app.listen(PORT,()=>{
    console.log(`server is run on ${5001}`);
})