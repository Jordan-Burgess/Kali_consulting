const mongoose = require('mongoose')
const hashtags = require('./Hashtags')
const Reviews = require('./Review')
const Category = require('./Category')

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