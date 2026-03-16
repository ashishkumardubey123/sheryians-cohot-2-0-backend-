const app = require('./src/app');
const connectDb = require('./src/config/dbconnection');

 

connectDb()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});