const express = require('express');
const router = express.Router();
const{body} = require("express-validator"); // Import express-validator
const userController = require('../controllers/user.controllers'); // Import user controller


router.post('/register', [  // Validate user input
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name should be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
], userController.registerUser    // Call user controller
    // Handle user registration
);




modile.exports = router;