const express = require('express');
const movieRouter = require('./Routes/movieRouter');
const User = require('./models/userModel');
const app = express();
const errorHandler = require('./Controllers/errorController');
const AppError = require('./utils/appError');
const asyncHandler = require('express-async-handler');

app.use(express.json());

app.use((req, res, next) => {
    console.log("each request")
    console.log(req.headers)
    next()
})

app.use('/api/v1/user', movieRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler)

module.exports = app;