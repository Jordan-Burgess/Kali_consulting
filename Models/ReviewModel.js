const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    content: String,
}, {timestamp: true})

const Reviews = mongoose.model('Reviews', reviewSchema)

module.exports = Reviews;