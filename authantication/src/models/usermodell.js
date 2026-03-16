const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
     name: String,
     email: {
          unique: [true, "email already exist"],
          type: String
     },
    
     password: String
})
     
module.exports = mongoose.model("User", userSchema)