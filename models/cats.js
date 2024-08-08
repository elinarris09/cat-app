const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Cats', catsSchema)