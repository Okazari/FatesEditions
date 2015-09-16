var express = require('express');
var router = express.Router();
var https = require("https");
var Player = require('../models/PlayerModel');

/************CHAMPIONS**********/
router.get('/', function(req, res, next) {
    Player.find(function(err, players) {
            if (err)
                res.send(err);

            res.json(players);
        });
}); 

router.get('/:playerId', function(req, res, next) {
    Player.findOne({_id:req.params.playerId},function(err, player) {
            if (err)
                res.send(err);
            res.json(player);
        });
}); 

router.post('/', function(req, res, next) {
    
    player = new Player();
    
    player.username = req.body.username;
    player.password = req.body.password;
    player.save(function(err) {
        if (err) res.send(err);
        res.json(player);
    });
}); 

module.exports = router;
