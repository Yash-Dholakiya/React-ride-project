const userModel = require('../models/user.model');    // Import userModel


module.exports.createUser = async ({    // Create a new user
    firstname, lastname, email, password,
}) =>{
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }
    const user = userModel.create({
        firstname: {
            firstname,
            lastname
        },
        email, 
        password
    });

    return user;
}