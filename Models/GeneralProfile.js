const mongoose = require('mongoose')
const hashtags = require('./Hashtags')
const User = require('./UserModel')
const Services = require('./Service')
const Reviews = require('./ReviewModel')
// TODO: Add Reviews Array - Ref ID


const userProfileSchema = new mongoose.Schema({
    hashtags: [{
        type: String,
        enum: hashtags
    }],
    budget: {
        type: Number,
        min: 0,
        max: 10
    },
    bio: String,
    isVIP: Boolean,
    originCountry: String,
    Language: String, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    savedServices: [{
        type: mongooose.Schema.Types.ObjectId,
        ref: Services
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Reviews
    }]

})

const UserProfile = mongoose.model('UserProfile', userProfileSchema)


module.exports = UserProfile;