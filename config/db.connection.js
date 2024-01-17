const mongoose = require('mongoose')
require('dotenv').config()
const Service = require('../Models/Service')

mongoose.connect(process.env.MONGODB_CONNECT)
.then(()=>{
    console.log('MongoDB Connected')
})
.catch((error)=>{
    console.log(`MongoDB Connection Failed: ${error}`)
})