const userModel = require('../models/user.model');    // Import userModel
const userService = require('../services/user.service');    // Import userService
const { validationResult } = require('express-validator');    // Import express-validator

modile.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);    // Validate user input
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }   // Return validation errors

    const { firstname, lastname, email, password } = req.body;    // Get user input

    const hashPassword = await userModel.hashPassword(password);    // Hash user password

    const user = await userService.createUser({    // Create a new user call
        firstname,
        lastname,
        email,
        password: hashPassword,
    });
}