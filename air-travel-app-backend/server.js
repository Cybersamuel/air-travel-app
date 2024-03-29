const express = require('express')
const mongoose = require('mongoose');
//const mongoUri = require('../air-travel-app-backend/db')
const cors = require('cors');
const app = express();
require('dotenv').config();


mongoose.set('strictQuery', false);

// routers imports for the app
const usersRouter = require('./routes/usersRoutes');
const flightsRouter = require('./routes/flightsRoutes');

// port number
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());

// connection indicator for the database
mongoose.connect(process.env.MONGODB_CLUSTER, {useNewUrlParser: true}).then(
    () => {console.log('Redstone Global database is connected.')},
    err => {console.log('Connection failed.')}
);

// app routes
app.use('/users', usersRouter);
app.use('/flights', flightsRouter);

// app listener
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


