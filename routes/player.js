var express = require('express');
var router = express.Router();
var https = require("https");
var Player = require('../models/PlayerModel');

/************Players**********/
router.get('/', function(req, res, next) {
    Player.find({},"username").then(function(players) {
        res.json(players);
    },function(err){
        next(err);
    });
}); 

router.get('/:playerId', function(req, res, next) {
    Player.findOne({_id:req.params.playerId},'username').then(function(player) {
        res.json(player);
    },function(err){
        next(err);
    });
}); 

router.post('/', function(req, res, next) {
    
    var player = new Player();
    
    player.username = req.body.username;
    player.password = req.body.password;
    player.save().then(function() {
        res.json(player);
    },function(err){
        next(err);
    });
}); 

module.exports = router;
