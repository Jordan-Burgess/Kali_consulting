const mongoose = require('mongoose')
// TO CHECK: Turns red when I write ./Categories
const categories = require('./Subcategories')

const categorySchema = new mongoose.Schema({
    name: String,
    photo: String,
    subcategories: [{
        type: String,
        enum: categories
    }]
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category