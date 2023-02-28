const FlightRouter = require('express').Router()

const {addFlight, 
    getFlights,
     getFlightById,
      deleteFlight,
       updateFlight } = require('../controllers/flights');

FlightRouter.get('/', getFlights);

FlightRouter.post('/add', addFlight);

FlightRouter.get('/update/:id', updateFlight);

FlightRouter.delete('/:id', deleteFlight);

FlightRouter.get('/:id', getFlightById);

module.exports = FlightRouter;