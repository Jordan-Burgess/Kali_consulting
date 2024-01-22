const express = require('express')
const app = express()
require('dotenv').config()
require('./config/db.connection')
const PORT = process.env.PORT

const service_controller = require('./controllers/service_controller')
const profile_controller = require('./controllers/profile_controller')
const category_controller = require('./controllers/category_controller')
const review_controller = require('./controllers/review_controller')

app.use('/services', service_controller)
app.use('/profile', profile_controller)
app.use('/categories', category_controller)
app.use('/reviews', review_controller)

app.get('/', (req, res)=>{
    res.send('Kali Consulting API')
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})