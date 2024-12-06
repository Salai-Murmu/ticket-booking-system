const express = require('express');
const movieRouter = require('./Routes/movieRouter');

const app = express();

app.use(express.json());



app.use((req,res,next)=>{
    console.log("each request")
    console.log(req.headers)
    next()
  })

app.use('/', movieRouter);

module.exports = app;