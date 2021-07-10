const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const user = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    tokens :[
      {
        token:{
            type:String,
            required:true
        }
      }
    ] 
}) 

//hasing password

user.pre('save',async function(next){
   // console.log("Hii I am pre");
    if(this.isModified('password')){
       // console.log("I am pre passwpord");
        this.password = await bcrypt.hash(this.password,12);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword,12);
    }
    next();
});

//we r generating token

user.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        tis.tokens = this.tokens.concat({token : token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}


const User = mongoose.model('USER',user);

module.exports = User;