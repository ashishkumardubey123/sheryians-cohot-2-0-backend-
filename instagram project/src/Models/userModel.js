const e = require("express")
const mongoose = require("mongoose")

const userScema = new mongoose.Schema({
    username:{
       type: String,
       unique: [true, "Username already exists" ],
       required:true

    },
    email:{
        type: String,
        unique: [true, "Email already exists" ],    
        required:true
    },
    password:{  
        type: String,
        required:true 
    },
    bio:String,
    profileimage: {
        type: String,
        default: 'https://ik.imagekit.io/Ashish834/istockphoto-2151669184-612x612.jpg'
    }

})

const userModel = mongoose.model("user", userScema)

module.exports = userModel 