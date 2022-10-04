const router = require('express').Router()
let Flight = require('../dbModels/flightModels')

router.route('/').get((req, res) => {
    Flight.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const flightNumber = Number(req.body.flightNumber)
    const IATAcode = req.body.IATAcode

    const newFlight = new Flight({flightNumber, IATAcode})

    newFlight.save()
    .then(() => res.json('Flight added!!'))
    .catch(err => res.status(400).json('Error:  ' + err))
})

module.exports = router