const mongoose = require('mongoose')
const hashtags = require('./Hashtags')
const subcategories = require('./Subcategories')

const serviceSchema = new mongoose.Schema({
    name: String,
    location: String,
    isFree: Boolean,
    isVip: Boolean,
    description: String,
    photo: String,
    hashtags: [{
        type: String,
        enum: hashtags
    }],
    date: Date,
    isHidden: Boolean,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    subcategory: [{
        type: String,
        enum: subcategories
    }]
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

serviceSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'service'
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service