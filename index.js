const express = require('express');
const app = express();
const userRoute = require('./routes/router')
const connectDB = require('./db/database');
const port = 2001;
require('dotenv').config()
app.set('view engine','ejs')
app.use('/api/v1/users',userRoute)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const start=async()=>{
    try {
       await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log('listening to 2001')
        })
    } catch (error) {
        console.log(error)
    }
}
start();