const mongoose = require("mongoose");
const User = require("../models/usermodell");
const express = require("express");
const usermodell = require("../models/usermodell");
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookie = require("cookie-parser")     
const cripto = require("crypto")


router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await usermodell.findOne({ email });
                                 
  if (existingUser) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const hash  =  cripto.createHash("md5").update(password).digest("hex")
  const user = await usermodell.create({
    name,
    email,
    password: hash,
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

router.post("/login", async (req, res) => {
      const { email, password } = req.body;
      const user = await usermodell.findOne({ email });

      if (!user) {
           return res.status(404).json({
                message: "User not found",
           });
      }
       const hash  =  cripto.createHash("md5").update(password).digest("hex")
      if (user.password !== hash) {
           return res.status(401).json({
                message: "Invalid credentials",
           });
      }
      const token = jwt.sign({
           id : user._id, 
           email: user.email}, 
           process.env.jwt_secret,
      )
      res.cookie("jwt_token", token,)

      res.status(200).json({
           success: true,
           message: "User logged in successfully",
          
           token, 
      });

}
)

router.post("/logout", (req, res) => {
     res.clearCookie("jwt_token");
     res.status(200).json({
          success: true,
          message: "User logged out successfully",
     });
})

module.exports = router;
