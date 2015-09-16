var express = require('express');
var router = express.Router();
var https = require("https");
var Book = require('../models/BookModel');
var Page = require('../models/PageModel');
var Transition = require('../models/TransitionModel');
var Player = require('../models/PlayerModel');
var async = require('async');

/************BOOKS**********/
router.get('/', function(req, res, next) {
    var filter = {}
    if(req.query.userId) filter.authorId = req.query.userId
    if(req.query.draft) filter.draft = req.query.draft;
    Book.find(filter,function(err, books) {
            if (err){
                res.send(err);
            }
            res.json(books);
        });
});

router.post('/', function(req, res, next) {
    var book = new Book();
    book.draft = true;
    Player.findOne({_id:req.body.userId},function(err,player){
        if(err) res.err(err);
        book.authorName = player.username;
        book.authorId = req.body.userId;
        book.save(function(err){
            if(err) res.err(err);
            res.status(201);
            res.json(book);
        })
    })
});

router.get('/:bookId', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},function(err, book){
        if(err) res.err(err);
        res.json(book);
    })
});

router.get('/:bookId/page', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},function(err, book){
        if(err){
            res.err(err);  
        }
        Page.find({"bookId":req.params.bookId},function(err,pages){
            if(err){
                res.err(err);
            }
            res.json(pages);
        })
    })
});

router.patch('/:bookId', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},function(err, book){
        if(err){
            res.err(err);  
        }
        if(req.body.name) book.name = req.body.name;
        if(req.body.tags) book.tags = req.body.tags;
        if(req.body.synopsis) book.synopsis = req.body.synopsis;
        if(req.body.cover) book.cover = req.body.cover;
        if(req.body.genreId) book.genreId = req.body.genreId;
        if(req.body.stats) book.stats = req.body.stats;
        if(req.body.objects) book.objects = req.body.objects;
        if(req.body.draft === false || req.body.draft) book.draft = req.body.draft;
        if(req.body.startingPageId) book.startingPageId = req.body.startingPageId;
        book.save(function(err){
            if(err)
                res.err(err);
            res.json(book);
        })
    })
});

router.delete('/:bookId', function(req, res, next) {
    
    Page.find({bookId:req.params.bookId},function(err, pages){
        if(err) res.err(err);
        async.each(pages,function(page,eachCallback){
            Transition.find({fromPage:page._id}).remove(function(err){
                if(err) res.err(err);
                eachCallback();
            });
        },function(){
            Page.find({bookId:req.params.bookId}).remove(function(err){
                if(err) res.err(err);
                Book.findOne({_id:req.params.bookId}).remove(function(err){
                    if(err) res.err(err);
                    res.sendStatus(200);
                });
            });
        });
    })
});

module.exports = router;
