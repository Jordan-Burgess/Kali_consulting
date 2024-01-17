const express = require('express')
const app = express()
require('dotenv').config()
require('./config/db.connection')
const PORT = process.env.PORT

const service_controller = require('./controllers/service_controller')
const profile_controller = require('./controllers/profile_controller')


app.use('/services', service_controller)
app.use('/profile', profile_controller)

app.get('/', (req, res)=>{
    res.send('Kali Consulting API')
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})