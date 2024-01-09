const express = require('express')
const app = express()
require('dotenv').config()
require('./config/db.connection')
const PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.send('Kali Consulting API')
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})