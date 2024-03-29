const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const user = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        minlength: 1
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

user.methods.generateAuthToken = () => {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"});
    return token
}

const validate = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label("First Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    })

    return schema.validate(data)
}

module.exports = mongoose.model('User', user, );
