//global error handling middleware
const AppError = require('../utils/appError');
const sendErrorProd = (err, res) => {
    if(err.isOperational){
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })}else{
            console.log('something went very wrong');
            res.status(500).json({
                status: 'error',
                message: 'Something went very wrong',
                err:err
            }); 
        }
    
}
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack
    });
}

const handleCastErrorDB = (err) => {
    return new AppError(`${err.message}`, 400);
}

const errorController = ((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if(process.env.NODE_ENV === 'production'){
        let error = {}
        error.name = err.name;
        error.path = err.path;
        error.message= err.message;
        console.log(error)
        if(error.name === 'CastError') error = handleCastErrorDB(error);
        
        sendErrorProd(error, res);
    }
    else if(process.env.NODE_ENV === 'development'){
        sendErrorDev(err, res);
    }
});
module.exports = errorController;