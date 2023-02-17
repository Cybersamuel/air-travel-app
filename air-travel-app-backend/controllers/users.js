const User = require('../dbModels/userModel')
const User = require('../dbModels/userModel');
const nodemailer = require('nodemailer');
// const jwt = require('jsonwebtoken');
const { user, pass } = require('../credentials');
const bcrypt = require('bcrypt')
//const AuthRouter = require('../authentication/auth')

const getUsers = (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
}

const getUserById = (req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error '+ err))
}

const addUser = async (req, res) => {

    const username = String(req.body.username);
    const email = String(req.body.email);
    const password = String(req.body.password);

    if (!username || !email || !password){
        res.status(400)
        throw new Error("Please add all the fields")
    } else {
        // Check if the user exists.
        const userExists = await User.findOne({username});

        if(userExists){
            res.status(400)
            throw new Error('User alread exists')
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        if (user){
            res.status(201).json({
                _id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                token: generate
            })
            newUser.save()
            .then( () => {
            res.json('User has been added');
            
            async function main() {
        
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, 
                    auth: {
                    user: user, 
                    pass: pass, 
                    },
                });
        
                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: '"Redstone Global" <claytoncooper241@gmail.com>', // sender address
                    to: `${email}`, // list of receivers
                    subject: "Welcome to Redstone Global", 
                    text: "Hello world?", 
                    html: `<b>${username} We produce, we book your flight, we shoot for hire</b>`, 
                });
        
                console.log("Message sent: %s", info.messageId);
        
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                }
                main().catch(console.error);
            }).catch(err => {res.status(400).json('Error:  ' + err)});
        }
    } 
}

const updateUser = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username
        user.email = req.body.email
        user.password = req.body.password

        user.save()
        .then(() => res.status(200).json('User information updated!!'))
        .catch(err => res.status(400).json('Error '+ err))

    }).catch(err => res.status(400).json('Error' + err))

}

const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User has been deleted!!'))
    .catch(err => res.json('Error' + err))
}

module.exports = {getUsers, getUserById, addUser, updateUser, deleteUser }