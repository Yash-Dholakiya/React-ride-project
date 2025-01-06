const userModel = require('../models/user.model');  // Import userModel
const bycrypt = require('bcryptjs');    // Import bcryptjs
const jwt = require('jsonwebtoken');    // Import jsonwebtoken


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];    // Get token from cookie or header
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }   // Check if token exist

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);    // Verify token
        const user = await userModel.findById(decoded._id);    // Find user by id
        
        req.user = user;    // Set user in request object

        return next();    // Call next middleware

    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }   // Return error if token is invalid
}