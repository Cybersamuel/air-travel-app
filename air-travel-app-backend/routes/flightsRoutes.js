const router = require('express').Router()

const flight = require('../dbModels/flightModel')

router.route('/').get((req, res) => {
    flight.find()
    .then(flight => res.json(flight))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    // const airlineName = String(req.body.airlineName)
    // const flightNumber = Number(req.body)
    // const IATAcode = String(req.body.IATAcode)

    const newFlight = new flight(req.body)

    newFlight.save()
    .then(() => {res.json('Flight added!!')})
    .catch(err => {res.status(400).json('Error flight hasn\'t been added:  ' + err)})
})

module.exports = router