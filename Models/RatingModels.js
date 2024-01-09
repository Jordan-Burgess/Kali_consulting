const mongoose = require('mongoose')

const ratingsSchema = new mongoose.Schema({
    ratingValue: {
        type: Number,
        min: 1,
        max: 5
    },
    
})

const Rating = mongoose.model('Rating', ratingsSchema);

module.exports = Rating;