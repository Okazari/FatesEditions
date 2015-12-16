var express = require('express');
var router = express.Router();
var https = require("https");
var Page = require('../models/PageModel');
var Transition = require('../models/TransitionModel');

/************PAGES**********/
router.get('/', function(req, res, next) {
    Page.find().then(function(pages) {
        res.json(pages);
    },function(err){
        next(err);
    });
});

router.get('/:pageId', function(req, res, next) {
    if(req.params.pageId !== "undefined"){
        Page.findOne({_id:req.params.pageId}).then(function(page) {
            res.json(page);
        },function(err){
            next(err);
        });
    }else{
        res.sendStatus(404);
    }
    
});

router.post('/', function(req, res, next) {
    var page = new Page();
    page.bookId = req.body.bookId;
    page.save().then(function() {
        res.json(page);
    },function(err){
        next(err);
    });
});


router.patch('/:pageId', function(req, res, next) {
    Page.findOne({"_id":req.params.pageId},function(page){
        if(req.body.title) page.title = req.body.title;
        if(req.body.text) page.text = req.body.text;
        if(req.body.description) page.description = req.body.description;
        if(req.body.backgroundMusic) page.backgroundMusic = req.body.backgroundMusic;
        if(req.body.bookId) page.bookId = req.body.bookId;
        if(req.body.effects) page.effects = req.body.effects;
        if(req.body.backgroundMusic) page.backgroundMusic = req.body.backgroundMusic;
        page.save().then(function(){
            res.json(page);
        },function(err){
            next(err);
        })
    },function(err){
        next(err);
    })
});

router.delete('/:pageId', function(req, res, next) {
    Transition.remove({fromPage:req.params.pageId}).then(function(){
        Page.remove({_id:req.params.pageId}).then(function(){
            res.send(200);
        },function(err){
            next(err);
        })
    },function(err){
        next(err);
    });
});

router.get('/:pageId/transition', function(req, res, next) {
    Page.findOne({"_id":req.params.pageId}).then(function(page){
        Transition.find({"fromPage":req.params.pageId}).then(function(transitions){
            res.json(transitions);
        },function(err){
            next(err);
        })
    },function(err){
        next(err);
    })
});

module.exports = router;
