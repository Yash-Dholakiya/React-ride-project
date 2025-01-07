const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');  // Import cookie-parser
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');   // Import captain routes

connectToDb();

app.use(cors());
app.use(express.json());    // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));    // Parse URL-encoded bodies
app.use(cookieParser());    // Parse cookies



app.get('/', (req, res) => { 
    res.send('Hello Yash Dholakiya');
});

app.use('/users', userRoutes);   // Use user routes
app.use('/captains', captainRoutes);    // Use caption routes




module.exports = app;

