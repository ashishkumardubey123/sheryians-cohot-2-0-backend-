require("dotenv").config(  )
const mongoose =  require("mongoose")

const connectDB = async () => {
     try {
          await mongoose.connect(process.env.MONGO_URI)
           console.log("connected to db ")

     }
     catch(erro){
          console.log(error.message)
     }
}

module.exports = connectDB