const Joi = require ('joi')
const mongoose = require('mongoose')

userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true 
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    photo: String, 
    isAdmin: Boolean
}, {timestamp : true})

const User = mongoose.model('User', userSchema)

function validateUser(user) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
  };

  return Joi.validate(user, schema);
}

exports.User = User; 
exports.validate = validateUser;
