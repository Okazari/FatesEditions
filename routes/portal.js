var express = require('express');
var router = express.Router();
var Player = require('../models/PlayerModel');

router.post('/login', function(req, res, next) {
   Player.findOne({username:req.body.username},function(err,player){
      if(err) res.err(err);
      if(!player){
          res.sendStatus(403);
      }else{
          res.send(player); 
      }
   });
});

module.exports = router;
