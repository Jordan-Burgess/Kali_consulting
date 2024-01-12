const mongoose = require('mongoose')

// TODO: Add Service Ref ID

const reviewSchema = new mongoose.Schema({
    content: String,
}, {timestamp: true})

const Reviews = mongoose.model('Reviews', reviewSchema)

module.exports = Reviews;