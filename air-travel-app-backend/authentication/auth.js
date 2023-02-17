const authRouter = require('express').Router();
const User = require('../dbModels/userModel');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');


// const validate = (data) => {
//    const schema = Joi.object({
//         username: Joi.string().email().required().label("Username"),
//         password: Joi.string().required().label("Password")
//     });
//     return schema.validate(data)
// }

// Generate JWT token 

const generateToken = (id) => {
    return jwt.sign({ id }, 'abc123', {
        expiresIn: '5d',
    })
}
authRouter.post('/', async(req, res) => {

    const [ username, password ] = String(req.body);

    // Check for user email
    const user = await User.findOne({username});

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials');
    }
        // try {
        //     const error = validate(req.body);

        //     if (error) {
        //         return res.status(400).send({message: error.details[0].message});
        //     }
    
        //     const user = await User.findOne({username: req.body.username});
        //     if (!user)
        //         return res.status(401).send({message: "Invalid username or password"});
    
        //     const validPassword = await bcrypt.compare(
        //         req.body.password, user.password
        //     );
        //     if (!validPassword)
        //         return res.status(401).send({message: "Invalid username or password"});
    
        //     const token = user.generateAuthToken();
        //     res.status(200).send({data: token, message: "Logged in successfully"});
            
        // } catch(error) {
        //     res.status(500).send("Internal Server error")
        // }
        
})

module.exports = authRouter;

// const user = await User.findOne({
        //     username: req.body.username,
        //     password: req.body.password
        // });
    
        // if (user) {
        //     const token = jwt.sign(
        //         {
        //             username: user.username,
        //             email: user.email
        //         },
        //         'secret123'
        //     )
        //     return res.json({status: 'ok', user: token}).status(200);
        // } else {
        //     return res.json({status: 'error', user : false}).status(404);
        // }

