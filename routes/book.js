var express = require('express');
var router = express.Router();
var https = require("https");
var Book = require('../models/BookModel');
var Page = require('../models/PageModel');

/************BOOKS**********/
router.get('/', function(req, res, next) {
    filter = {}
    if(req.query.userId) filter.authorId = req.query.userId;
    if(req.query.draft) filter.draft = req.query.draft;
    Book.find(filter,function(err, books) {
            if (err)
                res.send(err);

            res.json(books);
        });
});

router.post('/', function(req, res, next) {
    var book = new Book();
    book.authorId = req.body.userId;
    book.draft = true;
    book.save(function(err){
        if(err)
            res.err(err);
        res.status(201);
        res.json(book);
    })
});

router.get('/:bookId', function(req, res, next) {
    Book.findOne({"_id":req.params.bookId},function(err, book){
        if(err)
            res.err(err);
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
        if(req.body.draft) book.draft = req.body.draft;
        if(req.body.startingPageId) book.startingPageId = req.body.startingPageId;
        book.save(function(err){
            if(err)
                res.err(err);
            res.json(book);
        })
    })
});

router.delete('/:bookId', function(req, res, next) {
    Book.remove({_id:req.params.bookId},function(err){
        if(err)
            res.err(err);
        
        res.send(200);
    })
});
module.exports = router;
