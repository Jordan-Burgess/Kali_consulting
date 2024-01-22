const mongoose = require('mongoose')

const subcategories = require('./Subcategories')

const categorySchema = new mongoose.Schema({
    name: String,
    photo: String,
    subcategories: [{
        type: String,
        enum: subcategories
    }]
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category