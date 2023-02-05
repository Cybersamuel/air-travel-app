const flightRouter = require('express').Router()
const Flight = require('../dbModels/flightModel')

flightRouter.route('/').get((req, res) => {
    Flight.find()
    .then(flight => res.status(200).json(flight))
    .catch(err => res.status(400).json('Error: ' + err))
})

flightRouter.route('/add').post((req, res) => {
    const flightNumber = Number(req.body.flightNumber)
    const IATAcode = req.body.IATAcode
    const airlineName = req.body.airlineName
    //const passengers = Number(req.body.passengers)

    const newFlight = new Flight({
        airlineName,
        flightNumber,
        IATAcode,
        //passengers
    })

    newFlight.save()
    .then(() => res.status(200).json('Flight added!!'))
    .catch(err => res.status(400).json('Error:  ' + err))
})

flightRouter.route('/update/:id').post((req, res) => {
    Flight.findById(req.params.id)
    .then(flight => {
        flight.airlineName = req.body.airlineName
        flight.flightNumber = Number(req.body.flightNumber)
        flight.IATAcode = req.body.IATAcode

        flight.save()
        .then(() => res.status(200).json('Flight updated!!'))
        .catch(err => res.json('Error  ' + err).status(400))
    })
    .catch(err => res.status(400).json('error' + err))

})

flightRouter.route('/:id').delete((req, res) => {
    Flight.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json('Flight has been deleted!!'))
    .catch(err => res.status(400).json('Error ' + err))
})

flightRouter.route('/:id').get((req, res) => {
    Flight.findById(req.params.id)
    .then(flight => res.json(flight))
    .catch(err => res.status(400).json('Error ' + err))
})

module.exports = flightRouter;