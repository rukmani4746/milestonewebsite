const mongoose = require('mongoose')

//creating a database

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://rukmanisdb:vjycEqeXgt3fpaS7@cluster0.fw901z3.mongodb.net/dynamicwebsite",{
    
    useNewUrlParser:true,
    
    //mongoose.connect return a promise that i will establish connection or not resolve or reject

}).then(()=> { 
console.log("connection successful");

}).catch((error)=>{
    console.log(error)
})