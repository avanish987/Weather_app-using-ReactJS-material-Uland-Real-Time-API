const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require('../db/conn');
const User = require("../model/user");

router.get('/',(req,res) =>{
    res.send(`Welcome to the router server`);
});

//using promises
/* router.post('/register',  (req,res) =>{

    const {name,email,phone,work,password,confirmpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !confirmpassword)
    {
        return res.status(422).json({error:"PLzz filled the field"});
    }
    User.findOne({email:email})
    .then((userExist) =>{
        if(userExist){
            return res.status(422).json({error: "Email already Exist"});
        }

        const user = new User({name,email,phone,work,password,confirmpassword});
        
        user.save().then(() =>{
            res.status(201).json({message:"user registered successfuly"});
        }).catch((err) => res.status(500).json({error:"Failed to registered"}));
    }).catch(err =>{console.log(err); });

}); */
// using async await
router.post('/register', async (req,res) =>{

    const {name,email,phone,work,password,confirmpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !confirmpassword)
    {
        return res.status(422).json({error:"PLzz filled the field"});
    }
    try{
         const userExist = await User.findOne({email : email});
        if(userExist){
            return res.status(422).json({error: "Email already Exist"});
        } else if(password != confirmpassword){
            return res.status(422).json({error:"password are not matching"});
        } else {
            const user = new User({name,email,phone,work,password,confirmpassword});
        //password hashing
         await user.save();
        res.status(201).json({message : "user registered successfuly"});

        }
    } catch(err){
        console.log(err);
    }
});

// login route

router.post('/signin', async (req,res)=>{
       try{
           let token;
           const {email , password} = req.body;
           if(!email || !password)
           {
               return res.status(400),json({error:"fill date plzz"})
           }

           const userLogin = await User.findOne({email:email});
           
           if(userLogin){
                const isMatch = await bcrypt.compare(password,userLogin.password);
                token = await userLogin.generateAuthToken(); 
                console.log(token);
                
                res.cookie("jwtoken",token,{
                    expires:new Date(Date.now() + 25892000000),
                    httpOnly:true
                });


                if(!isMatch){
                    res.json({error:"Invalid"});
                }else {
                    res.json({message:"user signin successfully"});
                }
            }else{
                res.status(400).json({error:"Invalid"});
            }
    }catch(err){
        console.log(err);
    }
});

module.exports = router;