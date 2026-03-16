require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async()=>{
   
    try{
      await mongoose.connect(process.env.MONGO_URI)
      console.log("Datebase connected")
    }
    catch(error){
        console.log(error.message)
    }

}

module.exports = connectDb