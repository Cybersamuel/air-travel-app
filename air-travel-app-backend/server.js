const express = require('express')

const config = require('./db')
const mongoose = require('mongoose')

//require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())

mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    () => {console.log('MongoDB database connection established successfully')},
    err => {console.log('Failed to connect to the database')}
)

// const connection = mongoose.connection
// connection.once('open',  () => {
//     console.log('MongoDB database connection established successfully')
// })
// routes

const usersRouter = require('./routes/usersRoutes')
const flightsRouter = require('./routes/flightsRoutes')

app.use('/users', usersRouter)
app.use('/flights', flightsRouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


