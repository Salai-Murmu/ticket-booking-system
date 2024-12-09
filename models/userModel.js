const mongoose = require('mongoose');   

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    email:{
        type: String,
        required: [true, 'Please provide your email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function(value) {
                return value === this.password;
            },
            message: 'Passwords do not match',
        },
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// Remove the pre middleware
// userSchema.pre('save', function(next) {
//     if (this.password !== this.confirmPassword) {
//         return next(new Error('Passwords do not match'));
//     }
//     next();
// });

const User = mongoose.model('User', userSchema);
module.exports = User;