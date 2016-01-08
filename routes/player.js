var express = require('express');
var router = express.Router();
var https = require("https");
var Player = require('../models/PlayerModel');

/************Players**********/
router.get('/', function(req, res, next) {
    Player.find({},"username email").then(function(players) {
        res.json(players);
    },function(err){
        next(err);
    });
}); 

router.get('/:playerId', function(req, res, next) {
    Player.findOne({_id:req.params.playerId},'username email').then(function(player) {
        res.json(player);
    },function(err){
        next(err);
    });
}); 

router.patch('/:playerId',function(req,res,next){
    Player.findOne({_id:req.params.playerId}).then(function(player){
        var hadError = false;
        if(req.body.passwords){
            if(req.body.passwords.confirmation === req.body.passwords.new && req.body.passwords.old == player.password){
                player.password = req.body.passwords.new;
            }else{
                hadError = true;
                if(req.body.passwords.confirmation !== req.body.passwords.new){
                    res.status(400).send({message:'Les mots de passe ne correspondent pas, Réessayez'});
                }else{
                    res.status(403).send({message:'Mauvais mot de passe, Réessayez'});
                }
            }
        }
        if(!hadError){
            player.save().then(function(){
                res.sendStatus(200);   
            },function(err){
                next(err)  
            })
        }
    },function(err){
        next(err)
    })
})

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
