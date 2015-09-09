var express = require('express');
var router = express.Router();
var https = require("https");
var Genre = require('../models/GenreModel');

/************CHAMPIONS**********/
router.get('/', function(req, res, next) {
    Genre.find(function(err, genres) {
            if (err)
                res.send(err);

            res.json(genres);
        });
});

module.exports = router;
