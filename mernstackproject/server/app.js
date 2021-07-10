const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({path : './config.env'});
require('./db/conn');
app.use(express.json());
//const User = require('./model/user');

app.use(require('./router/auth'));

const PORT = process.env.PORT;



//Middleware

const Middleware = (req,res,next) =>{
    console.log(`hello Middleware`);
    next();
}

/* app.get('/',(req,res) =>{
    res.send(`Welcome to the server`);
}); */

app.get('/about',(req,res) =>{
    res.send(`Welcome to the about us page`);
});

app.get('/contact',(req,res) =>{
    res.send(`Welcome to the contact page`);
});

app.get('/signin',(req,res) =>{
    res.send(`Welcome to the signin page`);
});

app.get('/signup',(req,res) =>{
    res.send(`Welcome to the signup page`);
});

app.listen(PORT, () =>{
    console.log(`server is running at port no ${PORT}`);
})