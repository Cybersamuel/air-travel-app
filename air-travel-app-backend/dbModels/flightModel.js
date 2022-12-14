const mongoose = require('mongoose')

var flightSchema = new mongoose.Schema({

    airlineName: {
        type: String,
        required: true,
        minlength: 5

    },
    flightNumber:{     
        type: Number,
        required: true,
        minlength: 1
    },
    IATAcode: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    // passengers: {
    //     type: Number,
    //     required: true
    // }
    
}, {
    timestamps: true
}, {
    collection: 'flights'
})

module.exports = mongoose.model('Flights', flightSchema)