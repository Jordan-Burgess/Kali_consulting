const mongoose = require('mongoose')
const hashtags = require('./Hashtags')
const { User } = require('./User')
const Service = require('./Service')
const Review = require('./Review')

const profileSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: Service
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Review
    }]

})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;
