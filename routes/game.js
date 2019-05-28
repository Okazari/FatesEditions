var express = require('express');
var router = express.Router();
var https = require("https");
var Game = require('../models/GameModel');
var Book = require('../models/BookModel');

/************CHAMPIONS**********/
router.get('/', function(req, res, next) {
    var filter = {};
    
    if(req.query.playerId) filter.playerId = req.query.playerId;
    
    Game.find(filter,function(err, games) {
        if (err) res.send(err);
        
        res.json(games);
    });
});

router.get('/count', function(req, res, next) {
    Game.count({},function(err, number) {
        res.status(200).json(number);
    });
});

router.get('/:gameId', function(req, res, next) {
    Game.findOne({_id:req.params.gameId},function(err, game) {
        if (err) res.send(err);
        res.json(game);
    });
});

router.post('/', function(req, res, next) {
    
    var game = new Game();
    
    game.playerId = req.body.playerId;
    game.currentPageId = req.body.currentPageId;
    game.bookId = req.body.bookId;
    
    Book.findOne({_id:req.body.bookId},function(err,book){
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
        game.save(function(err) {
            if (err) res.send(err);
            
            res.json(game);
        });
    })
});

router.delete('/:gameId', function(req, res, next) {
    Game.findOne({_id:req.params.gameId}).remove(function(err){
        if(err) next(err);
        res.status(201);
        res.send("deleted");
    });
});

router.patch('/:gameId', function(req, res, next) {
    Game.findOne({_id:req.params.gameId}, function(err,game){
        if(err) next(err);
        game.currentPageId = req.body.currentPageId;
        game.objects = req.body.objects;
        game.stats = req.body.stats;
        game.save(function(err){
            if(err) next(err);
            res.send(game);
        });
    });
});

module.exports = router;
