import mongoose from 'mongoose';
import userModel from '../models/userModel.js'
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import jwt from 'jsonwebtoken';

export const createUser = async ( req , res ) => {
    try{
        let userData = req.body;
        let { name, email, password, role } = userData;
        if(!name && !email && !password && !role) return res.status(400).send({success:false,message:"data is required"});

        if(!userData) return res.status(400).send({success:false,message:"userData is mendatory"})

        const hashedPassword = await hashPassword(password);

        const user = await new userModel({
            name,
            email,
            role,
            password: hashedPassword,
   
         }).save();
         res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user,
         });

        
    
    }catch (error){
        res.status(500).send({success:false,message:error.message})
    }
}


export const loginUser = async (req, res) => {
    try {
       const { email, password } = req.body;
       if (!email || !password) {
          return res.status(404).send({
             status: false,
             message: "Invalid email or password"
          })
       }
       //check user
 
       const user = await userModel.findOne({ email });
       if (!user) {
          return res.status(404).send({
             success: false,
             message: "Email is not Registered",
          })
       }
       const match = await comparePassword(password, user.password)
       if (!match) {
          return res.status(200).send({
             success: false,
             message: "invalid password",
          })
       }
 
  //token
      const token = await jwt.sign({_id:user._id},"mywebsite",{expiresIn:'7d',
    });
    res.status(200).send({success:true,message:'login successfully',
    user:{
       name:user.name,
       email:user.email,
       password:user.password,
       role:user.role,
    },
    token,
 });
    }
    catch (error) {
       console.log(error)
       res.status(500).send({
          success: false,
          message: "Error in Login",
          error
       })
    }
 
 }


