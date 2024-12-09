const mongoose = require('mongoose');  
const showtimeSchema = new mongoose.Schema({
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: [true, 'Please provide a movie']
    },
    theater:{
        type: String,
        required: [true, 'Please provide a theater']
    },
    date:{
        type: Date,
        required: [true, 'Please provide a date']
    },
    showtime: {
        type: Date,
        required: [true, 'Please provide a showtime']
    },
    seats: [
        {
          seatNo: { type: String, required: true }, // Seat number (e.g., A1, B2)
          status: { type: String, enum: ['available', 'booked'], default: 'available' }, // Seat status
          userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // User who booked the seat
          price: { type: Number, required: true } // Price of the seat
        }
      ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Showtime = mongoose.model('Showtime', showtimeSchema);
module.exports = Showtime;s