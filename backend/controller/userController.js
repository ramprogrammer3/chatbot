
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.login = async(req,res)=>{
    try {
        
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

        res.send({
            msg : "user found"
        })
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error.message
        })
    }
}



