const asyncHandler = require('express-async-handler');

exports.signup = asyncHandler(async (req,res) => {
    const newUser = await User.create({
        name:  req.body.name,
        email: req.body.email,
        password: req.body.password,
        
    });
    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    });
})