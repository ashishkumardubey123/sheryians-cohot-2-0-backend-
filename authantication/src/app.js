const express = require("express") 
const router = require("./routes/auth")
const cockieParser = require("cookie-parser")

const app = express()

app.use(express.json())
app.use(cockieParser())

app.use("/api/auth", router)



module.exports = app



