
const User = require("../models/userModel");

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



