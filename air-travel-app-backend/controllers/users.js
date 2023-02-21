const User = require('../dbModels/userModel')
const nodemailer = require('nodemailer');
const { user, pass } = require('../credentials');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


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
        res.json("Please add all the fields")
    } else {
        // Check if the username or email exists.
        const userExists = await User.findOne({username});
        const emailExists = await User.findOne({email});

        if(userExists || emailExists){
            res.status(400).json('Username or email is already registered in this company')
        } else {
           // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt)

            const newUser = new User({
                username,
                email,
                password : hashedPassword
            })

            if (newUser){
                res.status(201).json({
                    _id: newUser.id,
                    username: newUser.username,
                    email: newUser.email,
                    token: generateToken(newUser._id)
                })
            newUser.save()
            .then(() => {
                
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
                        subject: "Thanks for registering", 
                        text: "Hello world?", 
                        html: `Thanks for registering in our company ${username}. <br/>
                        In Redstone Global, we offer people the best travel deals they can get.`, 
                    });
            
                    console.log("Message sent: %s", info.messageId);
            
                    // Preview only available when sending through an Ethereal account
                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                    
                    }
                    main().catch(console.error);
                }).catch(err => {res.status(400).json('Error:  ' + err)});

            }
  
        }
    } 
}

const updateUser = async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
        User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username
            user.email = req.body.email
            user.password = req.body.password 
            user.password = hashedPassword

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

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '4d',
    })
}

  const authUser = async (req, res) => {

    const username = String(req.body.username);
    const password = String(req.body.password);
  
    // Check for user email
    const user = await User.findOne({username});

    if (user && await bcrypt.compare(password, user.password)) 
        res.status(200).json({
        msg: "Welcome back " + `${user.username}!`,
        token: generateToken(user._id)
    })
    else {
        res.status(400).json('Invalid credentials');
    }
        
}


module.exports = {getUsers, getUserById, addUser, updateUser, deleteUser, authUser }