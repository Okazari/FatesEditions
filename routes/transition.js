var express = require('express');
var router = express.Router();
var https = require("https");
var Transition = require('../models/TransitionModel');

/************CHAMPIONS**********/
router.get('/', function(req, res, next) {
    Transition.find(function(err, transitions) {
            if (err)
                res.send(err);

            res.json(transitions);
        });
});

module.exports = router;
