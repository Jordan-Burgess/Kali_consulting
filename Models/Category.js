const mongoose = require('mongoose')
const Services = require('./Service')

const categorySchema = new mongoose.Schema({
    name: String,
    photo: String,
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Services 
    }],
    subcategories: [{
        type: String
    }]
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category