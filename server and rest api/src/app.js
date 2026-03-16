const express = require("express")
 const app = express()

  app.use(express.json)

// const post =[]


 app.get("/",(req, res)=>{
      
     res.send( "server started in local host 3000")
     res.sendStatus(200)
 })

 

//    app.post("/post",(req, res)=>{
      
//      console.log(req.body)

//       post.push(req.body) 
         
       
     
//    })



 module.exports= app