const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema = ({

    airlineName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5

    },
    flightNumber:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    IATAcode: {
        type, Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 2,
        maxlength: 2
    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Flights')