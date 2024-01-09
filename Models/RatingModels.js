const mongoose = require('mongoose')

const ratingsSchema = new mongoose.Schema({
    ratingValue: Number 
})

const Rating = mongoose.model('Rating', ratingsSchema);

module.exports = Rating;