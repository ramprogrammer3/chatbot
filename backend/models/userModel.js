const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required :true,
    },
    image : {
        type : String,
        default : "",
    },
    chats : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Chat"
    }]
},{timestamps : true});

module.exports = mongoose.model("User",userSchema);