const express = require('express');
const movieRouter = require('./Routes/movieRouter');
const User = require('./models/userModel');
const app = express();

app.use(express.json());

const newUser = new User({
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'hashedPassword123', // Usually you would hash the password before saving
  role: 'user',  // You can specify role as needed
});

// Save the user to the database
newUser.save()
  .then((user) => {
    console.log('User saved successfully:', user);
  })
  .catch((err) => {
    console.error('Error saving user:', err);
  });

app.use((req,res,next)=>{
    console.log("each request")
    console.log(req.headers)
    next()
  })

app.use('/', movieRouter);

module.exports = app;