const mongoose = require("mongoose");
const User = require("../models/usermodell");
const express = require("express");
const usermodell = require("../models/usermodell");
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookie = require("cookie-parser")     


router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await usermodell.findOne({ email });

  if (existingUser) {
    return res.status(409).json({
      message: "User already exists",
    });
  }
  const user = await usermodell.create({
    name,
    email,
    password,
  });

  const token = jwt.sign({
     id : user._id, 
     email: user.email}, 
     process.env.jwt_secret,
)

   
     res.cookie("jwt_token", token,) 


  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
    token, 

  });
 
  console.log(user);
    
});

module.exports = router;
