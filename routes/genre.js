var express = require('express');
var router = express.Router();
var https = require("https");
var Genre = require('../models/GenreModel');

/************GENRES**********/
router.get('/', function(req, res, next) {
    Genre.find(function(err, genres) {
            if (err)
                res.send(err);

            res.json(genres);
        });
});


router.post('/', function(req, res, next) {
    var genre = new Genre();
    genre.name = req.body.name;
    genre.icon = req.body.icon;
    genre.save(function(err) {
        if (err)
            res.send(err);
        res.status(201);
        res.send(genre);
    });
});

module.exports = router;
