var express = require('express');
var router = express.Router();
var https = require("https");
var Game = require('../models/GameModel');

/************CHAMPIONS**********/
router.get('/', function(req, res, next) {
    Game.find(function(err, games) {
            if (err)
                res.send(err);

            res.json(games);
        });
});

module.exports = router;
