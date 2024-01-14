const mongoose = require('mongoose')
const Services = require('./Service')
// TODO: Add Services Array of Ref ID - OK
// TODO: Add subcategory Array or Strings - OK 

const categorySchema = new mongoose.Schema({
    name: String,
    photo: String,
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Services 
    }],
    subcategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    }]

})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category