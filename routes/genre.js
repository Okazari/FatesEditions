/**
 * @description Genre endpoint
 */
const express = require('express');
const router = express.Router();
const https = require("https");
const Genre = require('../models/GenreModel');

/**
 * @method GET
 * @return genre array
 */
router.get('/', (req, res, next) => {
    Genre.find().then(genres => res.json(genres), err => next(err));
});

/**
 * @method GET
 * @param genreId
 * @return genre object
 */
router.get('/:genreId', (req, res, next) => {
  Genre.findById(req.params.genreId)
    .then(genre => res.json(genre), err => next(err));
});

/**
 * @method POST
 * @return genre object
 */
router.post('/', (req, res, next) => {
    if((req.body.name !== undefined && req.body.icon !== null) ||
    req.body.icon !== undefined && req.body.icon !== null) {
      let genre = new Genre();
      genre.name = req.body.name;
      genre.icon = req.body.icon;
      genre.save()
        .then(genre => res.status(201).json(genre), err => next(err));
    }
    else res.sendStatus(400);
});

module.exports = router;
