var express = require('express');
var router = express.Router();
var Player = require('../models/PlayerModel');
var jwt = require('jsonwebtoken');

router.post('/login', function(req, res, next) {
   Player.findOne({username:req.body.username}).then(function(player){
      if(!player || req.body.password != player.password){
          res.sendStatus(403);
      }else{
          var token = jwt.sign({user:player},"mysecretstory",{expiresIn:3600});
          player.password = null;
          res.send({token:token, user:player}); 
      }
   },function(err){
        next(err);
    });
});

router.post('/subscribe', function(req, res, next) {
   Player.findOne({username:req.body.username}).then(function(player){
      if(!player){
          if(req.body.password === req.body.verifyPassword){
             var newPlayer = new Player();
             newPlayer.username = req.body.username;
             newPlayer.email = req.body.email;
             newPlayer.password = req.body.password;
             newPlayer.tour = true;
             newPlayer.save(function(err,player){
                var token = jwt.sign({user:player},"mysecretstory",{expiresIn:3600});
                res.send({token:token, user:player});
             })
          }else{
             res.status(400);
             res.json({message:"Les deux mots de passe ne correspondent pas"});
          }
      }else{
          res.status(400);
          res.json({message:"Nom d'utilisateur déjà pris"});
      }
   },function(err){
        next(err);
    });
});
module.exports = router;
