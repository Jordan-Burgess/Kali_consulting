const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    content: String,
    ratingValue: {
        type: Number,
        min: 1,
        max: 5
    },
    service: {type: mongoose.Schema.Types.ObjectId, ref: 'Service'},
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
}, {timestamp: true})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;