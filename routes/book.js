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
    if(req.query.userId) filter.authorId = req.query.userId
    if(req.query.draft) filter.draft = req.query.draft;
    Book.find(filter,function(err, books) {
            if (err){
                next(err);
            }
            res.json(books);
        });
});

router.post('/', function(req, res, next) {
    var book = new Book();
    book.draft = true;
    Player.findOne({_id:req.body.userId},function(err,player){
        if(err) next(err);
        book.authorName = player.username;
        book.authorId = req.body.userId;
        book.save(function(err){
            if(err) next(err);
            res.status(201);
            res.json(book);
        })
    })
});

router.get('/:bookId', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},function(err, book){
        if(err) next(err);
        res.json(book);
    })
});

router.get('/:bookId/objects', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},"objects",function(err, book){
        if(err) next(err);
        res.json(book.objects);
    })
});

router.get('/:bookId/stats', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},"stats",function(err, book){
        if(err) next(err);
        res.json(book.stats);
    })
});

router.get('/:bookId/page', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},function(err, book){
        if(err){
            next(err);  
        }
        Page.find({"bookId":req.params.bookId},function(err,pages){
            if(err){
                next(err);
            }
            res.json(pages);
        })
    })
});

router.patch('/:bookId', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},function(err, book){
        if(err){
            next(err);  
        }
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
                Game.find({bookId:book._id}).remove(function(err){
                    if(err) next(err);
                    book.draft = true;
                    book.save(function(err){
                        if(err)
                            next(err);
                        res.json(book);
                    })
                })
            }else{
               book.save(function(err){
                    if(err)
                        next(err);
                    res.json(book);
                }) 
            }
        }else if (req.body.draft === false){
            
            if(book.draft === true){
            //Cas ou on publie un livre
                if(!book.startingPageId){
                    res.status(400);
                    res.send({message:"Le livre n'as pas de page de départ"});
                }else{
                    Game.find({bookId:book._id}).remove(function(err){
                        if(err) next(err);
                        book.draft = false;
                        book.save(function(err){
                            if(err)
                                next(err);
                            res.json(book);
                        })
                    })
                }
            }else{
               book.save(function(err){
                    if(err)
                        next(err);
                    res.json(book);
                }) 
            }
        }else{
            book.save(function(err){
                if(err)
                    next(err);
                res.json(book);
            })
        }
               
    })
});

router.delete('/:bookId', function(req, res, next) {
    
    Page.find({bookId:req.params.bookId},function(err, pages){
        if(err) next(err);
        async.each(pages,function(page,eachCallback){
            Transition.find({fromPage:page._id}).remove(function(err){
                if(err) next(err);
                eachCallback();
            });
        },function(){
            Page.find({bookId:req.params.bookId}).remove(function(err){
                if(err) next(err);
                Book.findOne({_id:req.params.bookId}).remove(function(err){
                    if(err) next(err);
                    res.sendStatus(200);
                });
            });
        });
    })
});

module.exports = router;
