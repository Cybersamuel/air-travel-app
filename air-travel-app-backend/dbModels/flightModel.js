const mongoose = require('mongoose')

var flightSchema = new mongoose.Schema({

    airlineName: {
        type: String,
        required: true,
        minlength: 0

    },
    flightNumber:{     
        type: String,
        required: true,
        minlength: 1,
        maxlength: 4
    },
    IATAcode: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    destination: {
        type: String,
        required: true
    },
}, {
    timestamps: true
}, {
    collection: 'flights'
})

module.exports = mongoose.model('Flights', flightSchema)