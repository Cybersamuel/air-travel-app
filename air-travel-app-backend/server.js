const express = require('express')
const config = require('./db')
const mongoose = require('mongoose');
const mongoUri = require('../air-travel-app-backend/db')
const app = express();

// routers for the app
const usersRouter = require('./routes/usersRoutes');
const flightsRouter = require('./routes/flightsRoutes');

// port number
const port = process.env.PORT || 3000;


app.use(express.json());

// connection indicator for the database
mongoose.connect(mongoUri.db, {useNewUrlParser: true}).then(
    () => {console.log('The travel agency database is connected.')},
    err => {console.log('Connection failed.')}
);

mongoose.set('strictQuery', true);

// app routes
app.use('/users', usersRouter);
app.use('/flights', flightsRouter);

// app listener
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


