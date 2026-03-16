
const userModel = require("../Models/userModel")
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
 
 
 async function registerController (req,res){
   
     const {email, username, password, bio, profileimage} = req.body

      const isuserExist = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
      })

      if(isuserExist){
        return res.status(409).json({
            message:"user already exist with userName or  email  "
        })
      }

       const hash = crypto.createHash('sha256').update(password).digest('hex')
      const user = await userModel.create({
        email,
        username,   
        bio,
        profileimage,
        password:hash
         
      })
         
      const token = jwt.sign({
        id:user._id,

    },process.env.JWT_SECRET, {expiresIn:"24h"})
    
    res.cookie("token",token)
    
   res.status(201).json({
  message: "User created successfully",
  user: {
    email: user.email,
    username: user.username,
    bio: user.bio,
    profileImage: user.profileImage
  }
});

   
 }

async function loginController (req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [
        
        { username: username },
         { email: email }]
  });

  if (!user) {
    return res.status(404).json({
      message: "User not registered"
    });
  }

  const hash = crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');

  const passwordValid = hash === user.password;

  if (!passwordValid) {
    return res.status(400).json({
      message: "Wrong password, try again"
    });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage
    }
  });
}

module.exports={
    registerController,
    loginController
}