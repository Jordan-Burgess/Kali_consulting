const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: String,
    photo: String,
    subcategories: {
        type: String
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category