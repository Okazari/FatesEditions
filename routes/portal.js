var express = require('express');
var router = express.Router();
var Player = require('../models/PlayerModel');
var jwt = require('jsonwebtoken');
var SHA512 = require("crypto-js/sha512");
var mailjet = require ('node-mailjet')
	.connect('5ef5f026c64d5e328dc7a113ba724e76', 'b4f9b9ec04a009f3da2167ddd0093a38');

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

router.post('/recover', function(req, res, next) {
   Player.findOne({email:req.body.email}).then(function(player){
      if(!player){
          res.sendStatus(404);
      }else{
        
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&é(-è_çà)=";  
        
        var newpassword = "";
        
        for(var i=0; i<10; i++){
            var key = Math.floor(Math.random() * chars.length);
            newpassword += chars[key];
        }
        
        console.log(player);
        player.password = SHA512(newpassword);
        
        player.save().then(function(){
            mailjet.post("send").request({
        		"FromEmail":"myvirtualstorybook@gmail.com",
        		"FromName":"Ne pas répondre",
        		"Subject":"Changement de mot de passe",
        		"Text-part":"",
        		"Html-part":"<div>Bonjour <b>"+player.username+"</b>,</div>"+
        		            "<br/><div>vous recevez ce mail car vous avez demandé à réinitialisé votre mot de passe.</div>" +
        		            "<div>Si vous n'avez jamais demandé à le changer, merci de contacter l'administateur du site en répondant à ce mail.</div>" +
        		            "<br/>"+
        		            "<div>Votre mot de passe temporaire est : <b>"+newpassword+"</b>" +
        		            "<br/>"+
                            "<div>Changez le dès que possible</div>" +
        		            "<div>N'hésitez pas à répondre à cet email si vous avez la moindre question à propos de l'application.</div>" +
        		            "<br/>" +
        		            "<div>Cordialement,</div>" +
        		            "<div>Benjamin</div>" +
        		            "<div>MyvirtualStorybook</div>",
        		"Recipients":[
        				{
        						"Email": "myvirtualstorybook@gmail.com"
        				}
        		]
    	    }).on('success', function (response, body) {
    		    console.log (response.statusCode, body);
    		    res.sendStatus('200');
        	}).on('error', function (err, response) {
        		console.log (response.statusCode, err);
        		res.status(500);
        		res.send(err);
        	});
        },function(err){
            next(err);
        })
        
        
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
