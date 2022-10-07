const router = require('express').Router()
let User = require('../dbModels/userModels')
const { route } = require('./flightsRoutes')

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {

    const username = String(req.body.username)
    const email = String(req.body.email)
    const password = String(req.body.email)

    const newUser = new User({
        username,
        email,
        password
    })

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error:  ' + err))
})

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username,
        user.email = req.body.email,
        user.password = req.body.password

        user.save()
        .then(() => res.json('User information updated!!'))
        .catch(err => res.status(400).json('Error'+ err))

    }).catch(err => res.status(400).json('Error' + err))

})

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User has been deleted!!'))
    .catch(err => res.json('Error' + err))
})

module.exports = router