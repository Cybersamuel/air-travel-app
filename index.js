const express = require('express')
const app = express()

var json = {
    amount: "3000"
}

app.get('/', (req, res) => {

    res.send(json)
    res.status(200)
    console.log("Server running on port 3000")
})



app.listen(3000)