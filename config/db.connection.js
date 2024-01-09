const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_CONNECT)
.then(()=>{
    console.log('MongoDB Connected')
})
.catch((error)=>{
    console.log(`MongoDB Connection Failed: ${error}`)
})