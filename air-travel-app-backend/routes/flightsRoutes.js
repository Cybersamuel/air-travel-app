const flightRouter = require('express').Router()

const {addFlight, 
    getFlights,
     getFlightById,
      deleteFlight,
       updateFlight } = require('../controllers/flights');

flightRouter.get('/', getFlights);

flightRouter.post('/add', addFlight);

flightRouter.get('/update/:id', updateFlight);

flightRouter.delete('/:id', deleteFlight);

flightRouter.get('/:id', getFlightById);

module.exports = flightRouter;