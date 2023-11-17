
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async(req,res)=>{
    try {

        // fetch email and password from req ki body
        const {email,password} = req.body;
        // validate data
        if(!email || !password){
            return res.status(400).json({
                success : false,
                message : "All fields are required"
            })
        }


        // check user is exist or not
        const user = await User.findOne({email})
        
        if(!user){
            return res.status(404).json({
                success : false,
                message : "User not found , please register"
            })
        }


        // compare password
        const checkPassword = await bcrypt.compare(password,user.password);

        if(!checkPassword){
            return res.status(403).json({
                success : false,
                message : "Password incorrect"    
            })
        }

        // create token
        const token = jwt.sign({email : user.email,id : user._id},"ramkumarsha256",{
            expiresIn : "30d"
        })

        // remove password from user
        user.password = undefined;
        user.token = token;

        const options = {
            httpOnly : true
        }

        // return response 
        
        return res.cookie("token",token,options).status(200).json({
            success : true,
            message : "User login successfully",
            token,
            user
        })

    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

exports.signup = async(req,res)=>{
    try {

        // fetch data from request body
        const {name,email,password} = req.body;
        // validate data
        if(!name || !email || !password){
            return res.status(400).json({
                success : false,
                message : "All fields are required"
            })
        }

        // check if user is already register
        const existUser = await User.findOne({email});

        if(existUser){
            return res.status(400).json({
                success : false,
                message : "User is already register"
            })
        }

        // assing user image using dice bearer
        let image = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${name}`;


        // hash password
        const hashPassword = await bcrypt.hash(password,10)

        // register user
        const user = await User.create({
            name,email,passowrd : hashPassword,
            image
        })
        // sending response to user

        return res.status(201).json({
            success : true,
            message : "User register successfully",
            user
        }) 
    } catch (error) {
        return res.status(500).json({
            success :false,
            message :error.message
        })
    }
}

exports.getAllUser = async(req,res)=>{
    try {

       // get All User
       const users = await User.find();
    
       // response
       return res.status(200).json({
        success : true,
        message : "All user data found",
        users
       })
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error.message
        })
    }
}



