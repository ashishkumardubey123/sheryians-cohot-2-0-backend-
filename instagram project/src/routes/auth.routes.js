const express = require("express");
const auth = require("../controllers/auth.controller");

// cookie-parser middleware not needed in routes unless parsing incoming cookies
// const cookieParser = require('cookie-parser')

const authRoute = express.Router()


  authRoute.post('/register', auth.registerController);

authRoute.post('/login', auth.loginController);

 module.exports = authRoute