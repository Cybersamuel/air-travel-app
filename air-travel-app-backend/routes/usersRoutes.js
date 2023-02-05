const UserRouter = require('express').Router()
let User = require('../dbModels/userModels')


UserRouter.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

UserRouter.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error '+ err))
})

UserRouter.route('/add').post((req, res) => {

    let username = String(req.body.username)
    let email = String(req.body.email)
    let password = String(req.body.email)

    const newUser = new User({
        username,
        email,
        password
    })

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error:  ' + err))
})

UserRouter.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username,
        user.email = req.body.email,
        user.password = req.body.password

        user.save()
        .then(() => res.status(200).json('User information updated!!'))
        .catch(err => res.status(400).json('Error'+ err))

    }).catch(err => res.status(400).json('Error' + err))

})

UserRouter.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User has been deleted!!'))
    .catch(err => res.json('Error' + err))
})

module.exports = UserRouter;