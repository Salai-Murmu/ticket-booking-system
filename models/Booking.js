const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }, // Reference to the User collection
  showtimeId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Showtime', 
    required: true 
  }, // Reference to the Showtime collection
  seats: [
    { 
      type: String, 
      required: true 
    } // List of seat numbers booked
  ],
  totalPrice: { 
    type: Number, 
    required: true 
  }, // Total price for the booked seats
  bookingDate: { 
    type: Date, 
    default: Date.now 
  } // Date and time when the booking was made
});

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
