const express = require('express')
const dotenv = require('dotenv')



dotenv.config({path:'./config/config.env'})
const connectDB = require('./config/db')



connectDB()
const app = express()



const PORT = process.env.PORT || 5001


app.listen(PORT,console.log("Runnig in "+PORT))