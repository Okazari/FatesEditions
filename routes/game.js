var express = require('express');
var router = express.Router();
var https = require("https");
var Game = require('../models/GameModel');
var Book = require('../models/BookModel');

/************CHAMPIONS**********/
router.get('/', function(req, res, next) {
    var filter = {};
    
    if(req.query.playerId) filter.playerId = req.query.playerId;
    
    Game.find(filter).then(function(games) {
        res.json(games);
    },function(err){
        next(err);
    });
});

router.get('/:gameId', function(req, res, next) {
    Game.findOne({_id:req.params.gameId}).then(function(game) {
        res.json(game);
    },function(err){
        next(err)
    });
});

router.post('/', function(req, res, next) {
    
    var game = new Game();
    
    game.playerId = req.body.playerId;
    game.currentPageId = req.body.currentPageId;
    game.bookId = req.body.bookId;
    
    Book.findOne({_id:req.body.bookId}).then(function(book){
        game.book = {
            synopsis : book.synopsis,
            name : book.name,
        }
        game.stats = {};
        book.stats.forEach(function(stat){
           game.stats[stat._id] = stat.initValue;
        });
        book.objects.forEach(function(object){
            if(object.atStart){
                game.objects.push(object._id);
            }
        })
        game.save().then(function() {
            res.json(game);
        },function(err){
            next(err);
        });
    },function(err){
        next(err);
    })
});

router.delete('/:gameId', function(req, res, next) {
    Game.findOne({_id:req.params.gameId}).remove().then(function(){
        res.status(201);
        res.send("deleted");
    },function(err){
        next(err);
    });
});

router.patch('/:gameId', function(req, res, next) {
    Game.findOne({_id:req.params.gameId}).then(function(game){
        game.currentPageId = req.body.currentPageId;
        game.objects = req.body.objects;
        game.stats = req.body.stats;
        game.save().then(function(){
            res.send(game);
        },function(err){
            next(err);
        });
    },function(err) {
        next(err);
    });
});

module.exports = router;
