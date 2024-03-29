const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const User = require('../dbModels/userModel');
 
const protect = asyncHandler(async (req, res, next) => {
    
    let token = '';

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split('')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user form the token
            req.user = await User.findById(decoded.id).select('-password')
            next();
        } catch (error) {
            console.log(error)
            res.status(401).json('Not authorized')
        }
    }
    if (!token){
        res.status(401).send('Not authorized, no token')
    }
})

module.exports = { protect }