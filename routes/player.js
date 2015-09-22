var express = require('express');
var router = express.Router();
var https = require("https");
var Player = require('../models/PlayerModel');

/************Players**********/
router.get('/', function(req, res, next) {
    Player.find({},"username",function(err, players) {
            if (err)
                next(err);

            res.json(players);
        });
}); 

router.get('/:playerId', function(req, res, next) {
    Player.findOne({_id:req.params.playerId},'username',function(err, player) {
            if (err)
                next(err);
            res.json(player);
        });
}); 

router.post('/', function(req, res, next) {
    
    player = new Player();
    
    player.username = req.body.username;
    player.password = req.body.password;
    player.save(function(err) {
        if (err) next(err);
        res.json(player);
    });
}); 

module.exports = router;
