const mongoose = require('mongoose')
const hashtags = require('./Hashtags')

// TODO: Add Reviews field array as reference ID
// TODO: Add Category Ref ID
// TODO: Add subcategory 

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
    isHidden: Boolean
})



const Service = mongoose.model('Service', serviceSchema)

module.exports = Service