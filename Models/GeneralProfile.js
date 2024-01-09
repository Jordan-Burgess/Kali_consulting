const mongoose = require('mongoose')
const hashtags = require('./Hashtags')
const User = require('./UserModel')

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
    }

})



const UserProfile = mongoose.model('UserProfile', userProfileSchema)


module.exports = UserProfile;