const AppError = require('../utils/appError');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');  


module.exports.getAllMovies = asyncHandler(async(req, res, next) => {

        
    const user = await User.findById(req.params.userId);
    if(!user) {
        return next(new AppError('No user found with that ID', 404));
    }
    console.log(user.name);
    res.json({
        message: 'All movies',
        data: user
    });
})