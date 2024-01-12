const mongoose = require('mongoose')

// TODO: Add Services Array of Ref ID
// TODO: Add subcategory Array or Strings

const categorySchema = new mongoose.Schema({
    name: String,
    photo: String,

})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category