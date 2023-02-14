const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    username: {
        type: String, 
        required: true, 
        minlength: 1
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

module.exports = mongoose.model('User', user)

