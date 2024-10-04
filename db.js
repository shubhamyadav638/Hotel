const mongoose = require('mongoose');
require('dotenv').config();
// MongoDB URL

const mongooseUrl = process.env.MONGODB_URL;


// Set up connection
mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define listeners for db connections
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log('Connection error with MongoDB:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;
