var express = require('express');
var router = express.Router();
var Player = require('../models/PlayerModel');

router.post('/login', function(req, res, next) {
   Player.findOne({username:req.body.username},function(err,player){
      if(err) next(err);
      if(!player || req.body.password != player.password){
          res.sendStatus(403);
      }else{
          player.password = null;
          res.send(player); 
      }
   });
});

router.post('/subscribe', function(req, res, next) {
   Player.findOne({username:req.body.username},function(err,player){
      if(err) next(err);
      if(!player){
          if(req.body.password === req.body.verifyPassword){
             var newPlayer = new Player();
             newPlayer.username = req.body.username;
             newPlayer.email = req.body.email;
             newPlayer.password = req.body.password;
             newPlayer.tour = true;
             newPlayer.save(function(err,player){
                res.send(player);
             })
          }else{
             res.status(400);
             res.json({message:"Les deux mots de passe ne correspondent pas"});
          }
      }else{
          res.status(400);
          res.json({message:"Nom d'utilisateur déjà pris"});
      }
   });
});
module.exports = router;
