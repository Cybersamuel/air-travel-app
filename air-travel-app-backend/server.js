const express = require('express')
const mongoose = require('mongoose');
const mongoUri = require('../air-travel-app-backend/db')
const cors = require('cors');
const app = express();


mongoose.set('strictQuery', false);

// routers for the app
const usersRouter = require('./routes/usersRoutes');
const flightsRouter = require('./routes/flightsRoutes');
const authRouter = require('./authentication/auth');

// port number
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());

// connection indicator for the database
mongoose.connect(mongoUri.db, {useNewUrlParser: true}).then(
    () => {console.log('The travel agency database is connected.')},
    err => {console.log('Connection failed.')}
);

// app routes
app.use('/users', usersRouter);

app.use('/flights', flightsRouter);

app.use('/auth', authRouter);

// app listener
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


