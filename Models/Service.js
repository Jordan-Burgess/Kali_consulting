const mongoose = require('mongoose')
const hashtags = require('./Hashtags')
const Reviews = require('./ReviewModel')
const Category = require('./Category')

// TODO: Add Reviews field array as reference ID - OK 
// TODO: Add Category Ref ID - OK
// TODO: Add subcategory - OK 

const serviceSchema = new mongoose.Schema({
    name: String,
    location: String,
    isFree: Boolean,
    isVip: Boolean,
    description: String,
    photo: String,
    hashtags: [{
        type: String,
        enum: hashtags
    }],
    date: Date,
    isHidden: Boolean,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Reviews
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    },
    subcategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    }]

})



const Service = mongoose.model('Service', serviceSchema)

module.exports = Service