const FlightRouter = require('express').Router()

const {addFlight, 
    getFlights,
     getFlightById,
      deleteFlight,
       updateFlight,
        getFlightByDestination } = require('../controllers/flights');

FlightRouter.get('/', getFlights);

FlightRouter.get('/:id', getFlightById);

FlightRouter.get('/destination', getFlightByDestination)

FlightRouter.post('/add', addFlight);

FlightRouter.get('/update/:id', updateFlight);

FlightRouter.delete('/:id', deleteFlight);

module.exports = FlightRouter;