const Flight = require('../dbModels/flightModel');

const getFlights = (req, res) => {
    Flight.find()
    .then(flight => res.status(200).json(flight))
    .catch(err => res.status(400).json('Error: ' + err));
}

const addFlight = (req, res) => {
    const airlineName = String(req.body.airlineName);
    const flightNumber = Number(req.body.flightNumber);
    const IATAcode = String(req.body.IATAcode);
    const destination = String(req.body.destination);
    
    const newFlight = new Flight({
        airlineName,
        flightNumber,
        IATAcode,
        destination
    });

    newFlight.save()
        .then(() => res.status(200).json('Flight added!!'))
        .catch(err => res.status(400).json('Error:  ' + err))
}


    

const updateFlight = (req, res) => {
    Flight.findById(req.params.id)
    .then(flight => {
        flight.airlineName = req.body.airlineName
        flight.flightNumber = Number(req.body.flightNumber)
        flight.IATAcode = req.body.IATAcode
        flight.destination = req.body.destination

        flight.save()
        .then(() => res.status(200).json('Flight updated!!'))
        .catch(err => res.json('Error  ' + err).status(400))
    })
    .catch(err => res.status(400).json('error' + err))

}

const deleteFlight = (req, res) => {
    Flight.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json('Flight has been deleted!!'))
    .catch(err => res.status(400).json('Error ' + err))
}

const getFlightById = (req, res) => {
    Flight.findById(req.params.id)
    .then(flight => res.json(flight))
    .catch(err => res.status(400).json('Error ' + err))
}

const getFlightByDestination = (req, res) => {
    const destination = req.body.destination;

    Flight.find({'destination': destination}, (err, found) => {
        if(!err){
            res.send(found);
        } else {
            res.send(err);
        }
    })
    // .then(flight => res.json(flight))
    // .catch(err => res.status(400).json('Error' + err))
}

module.exports = {getFlightById, getFlights, updateFlight, deleteFlight, addFlight, getFlightByDestination }