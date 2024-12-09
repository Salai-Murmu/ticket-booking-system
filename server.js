// const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Booking-app').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error:', error);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});