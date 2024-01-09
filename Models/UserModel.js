const mongoose = require('mongoose')

userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: Boolean,
    photo: String
}, {timestamp: true})

const User = mongoose.model('User', userSchema)

module.exports = User