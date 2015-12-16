var express = require('express');
var router = express.Router();
var https = require("https");
var Genre = require('../models/GenreModel');

/************GENRES**********/
router.get('/', function(req, res, next) {
    Genre.find().then(function(genres) {
        res.json(genres);
    },function(err){
        next(err);
    });
});


router.post('/', function(req, res, next) {
    var genre = new Genre();
    genre.name = req.body.name;
    genre.icon = req.body.icon;
    genre.save(function() {
        res.status(201);
        res.send(genre);
    }, function(err){
        next(err);
    });
});

module.exports = router;
