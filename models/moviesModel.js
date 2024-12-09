const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title']
    },
    genre: {
        type: String,
        required: [true, 'Please provide a genre']
    },
    duration: {
        type: Number,
        required: [true, 'Please provide a duration']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;