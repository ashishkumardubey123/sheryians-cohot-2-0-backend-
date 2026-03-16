const app = require("./src/app")
const connectDb = require("./src/config/connectDb")

connectDb()

const port = process.env.PORT || 3000

 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})