var express = require('express');
var router = express.Router();
var https = require("https");
var Book = require('../models/BookModel');
var Page = require('../models/PageModel');
var Transition = require('../models/TransitionModel');
var Player = require('../models/PlayerModel');
var Game = require('../models/GameModel');
var async = require('async');

/************BOOKS**********/
router.get('/', function(req, res, next) {
    var filter = {}
    if(req.query.userId) filter.authorId = req.query.userId;
    if(req.query.draft) filter.draft = req.query.draft;
    Book.find(filter).then(function(books) {
        res.json(books);
    },function(err){
        next(err);
    });
});

router.post('/', function(req, res, next) {
    var book = new Book();
    book.draft = true;
    Player.findOne({_id:req.body.userId}).then(function(player){
        if(player !== undefined){
            book.authorName = player.username;
            book.authorId = req.body.userId;
            book.save().then(function(){
                res.status(201);
                res.json(book);
            },function(err){
                next(err);
            })
        }else{
            res.status(401);
            res.json({message:"Compte innexistant"})
        };
    },function(err){
        next(err);
    })
});

router.get('/:bookId', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId}).then(function(book){
        res.json(book);
    },function(err){
        next(err);
    })
});

router.get('/:bookId/objects', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},"objects").then(function(book){
        res.json(book.objects);
    }, function(err){
        next(err);
    })
});

router.get('/:bookId/stats', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},"stats").then(function(book){
        res.json(book.stats);
    }, function(err){
        next(err);
    })
});

router.get('/:bookId/page', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId}).then(function(book){
        Page.find({"bookId":req.params.bookId}).then(function(pages){
            res.json(pages);
        },function(err){
            next(err);
        })
    },function(err){
        next(err);
    })
});

router.patch('/:bookId', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId}).then(function(book){
        if(req.body.name) book.name = req.body.name;
        if(req.body.tags) book.tags = req.body.tags;
        if(req.body.synopsis) book.synopsis = req.body.synopsis;
        if(req.body.cover) book.cover = req.body.cover;
        if(req.body.genreId) book.genreId = req.body.genreId;
        if(req.body.stats) book.stats = req.body.stats;
        if(req.body.objects) book.objects = req.body.objects;
        //if(req.body.authorId) book.authorId = req.body.authorId;
        if(req.body.startingPageId) book.startingPageId = req.body.startingPageId;
        if(req.body.draft === true) {
            if(book.draft === false){
            //Cas ou on dépublie un livre
                Game.find({bookId:book._id}).remove().then(function(){
                    book.draft = true;
                    book.save().then(function(){
                        res.json(book);
                    },function(err){
                        next(err);
                    })
                }, function(err){
                    next(err);
                })
            }else{
               book.save().then(function(){
                    res.json(book);
                },function(err){
                    next(err);
                }) 
            }
        }else if (req.body.draft === false){
            if(book.draft === true){
            //Cas ou on publie un livre
                if(!book.startingPageId){
                    res.status(400);
                    res.send({message:"Le livre n'as pas de page de départ"});
                }else{
                    Game.find({bookId:book._id}).remove().then(function(){
                        book.draft = false;
                        book.save().then(function(){
                            res.json(book);
                        },function(err){
                            next(err);
                        })
                    },function(err){
                        next(err);
                    })
                }
            }else{
               book.save().then(function(){
                    res.json(book);
               },function(err){
                   next(err);
               }) 
            }
        }else{
            book.save().then(function(){
                res.json(book);
            },function(err){
                next(err);
            })
        }   
    },function(err){
        next(err);
    })
});

router.delete('/:bookId', function(req, res, next) {
    
    Page.find({bookId:req.params.bookId}).then(function(pages){
        async.each(pages,function(page,eachCallback){
            Transition.find({fromPage:page._id}).remove().then(function(){
                eachCallback();
            },function(err){
                next(err);
            });
        },function(){
            Page.find({bookId:req.params.bookId}).remove().then(function(){
                Book.findOne({_id:req.params.bookId}).remove().then(function(){
                    res.sendStatus(200);
                },function(err){
                    next(err);
                });
            }, function(err){
                next(err);
            });
        });
    },function(err){
        next(err);
    })
});

module.exports = router;
