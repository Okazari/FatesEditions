var express = require('express');
var router = express.Router();
var https = require("https");
var Page = require('../models/PageModel');
var Transition = require('../models/TransitionModel');

/************PAGES**********/
router.get('/', function(req, res, next) {
    Page.find(function(err, pages) {
            if (err)
                res.send(err);
            res.json(pages);
        });
});

router.get('/:pageId', function(req, res, next) {
    Page.findOne({_id:req.params.pageId},function(err, page) {
            if (err)
                res.send(err);
            res.json(page);
        });
});

router.post('/', function(req, res, next) {
    var page = new Page();
    page.bookId = req.body.bookId;
    page.save(function(err) {
        if (err)
            res.send(err);

        res.json(page);
    });
});


router.patch('/:pageId', function(req, res, next) {
    Page.findOne({"_id":req.params.pageId},function(err, page){
        if(err){
            res.err(err);  
        }
        if(req.body.title) page.title = req.body.title;
        if(req.body.text) page.text = req.body.text;
        if(req.body.description) page.description = req.body.description;
        if(req.body.backgroundMusic) page.backgroundMusic = req.body.backgroundMusic;
        if(req.body.bookId) page.bookId = req.body.bookId;
        page.save(function(err){
            if(err)
                res.err(err);
            res.json(page);
        })
    })
});

router.delete('/:pageId', function(req, res, next) {
    Page.remove({_id:req.params.pageId},function(err){
        if(err)
            res.err(err);
        
        res.send(200);
    })
});

router.get('/:pageId/transition', function(req, res, next) {
    Page.findOne({"_id":req.params.pageId},function(err, page){
        if(err){
            res.err(err);  
        }
        Transition.find({"fromPage":req.params.pageId},function(err,transitions){
            if(err){
                res.err(err);
            }
            res.json(transitions);
        })
    })
});

module.exports = router;
