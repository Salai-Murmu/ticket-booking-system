const express = require('express');
const router = express.Router();
const movieController = require("../Controllers/movieController");

 router.route('/').get(movieController.getAllMovies);

 module.exports = router;