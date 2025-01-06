const express = require('express');
const router = express.Router();
const{ body } = require("express-validator"); // Import express-validator
const userController = require('../controllers/user.controllers'); // Import user controller
const authMiddleware = require('../middlewares/auth.middleware'); // Import auth middleware


router.post('/register', [  // Validate user input 
    // console.log("11"),
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], 
    userController.registerUser    // Call user controller // Handle user registration
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser    // Call user controller // Handle user login
)
router.get('/profile',authMiddleware.authUser, userController.getUserProfile)    // Call user controller // Handle user profile

router.get('/logout', authMiddleware.authUser, userController.logoutUser)    // Call user controller // Handle user logout



module.exports = router;