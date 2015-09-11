var express = require('express');
var router = express.Router();
var https = require("https");
var Transition = require('../models/TransitionModel');
var Page = require('../models/PageModel');
var Promise = require('promise');
var async = require('async');
/************TRANSITIONS**********/
router.get('/', function(req, res, next) {
    var filter = {};
    Transition.find(function(err, transitions) {
            if (err)
                res.send(err);

            res.json(transitions);
        });
});

router.post('/', function(req, res, next) {
    var transition = new Transition();
    transition.fromPage = req.body.fromPage;
    transition.save(function(err) {
        if (err)
            res.send(err);

        res.json(transition);
    });
});

router.patch('/:transitionId', function(req, res, next) {
    Transition.findOne({"_id":req.params.transitionId},function(err, transition){
        if(err){
            res.err(err);  
        }
        req.body.toPage ? transition.toPage = req.body.toPage : transition.toPage = "";
        req.body.text ? transition.text = req.body.text : transition.text = "";
        transition.save(function(err){
            if(err)
                res.err(err);
            res.json(transition);
        })
    })
});

router.delete('/:transitionId', function(req, res, next) {
    Transition.remove({_id:req.params.transitionId},function(err){
        if(err)
            res.err(err);
        
        res.send(200);
    })
});

router.get('/links', function(req, res, next) {
    var transitionsArray = [];
    Page.find({"bookId":req.query.bookId},function(err, pages){
        if(err) res.err(err);
        async.each(pages, function(page,eachCallback){
            Transition.find({"fromPage":page._id},function(err, transitions){
                transitionsArray = transitionsArray.concat(transitions);
                eachCallback();
            });
        },function(err){
            var links = [];
            async.each(transitionsArray,function(transition,eachCallback){
                async.parallel([function(callback){
                    Page.findOne({"_id":transition.fromPage}, function(err,page){
                        var result = "UNDEFINED";
                        if(page) result = page.title;
                        callback(null,result);
                    });
                },function(callback){
                    Page.findOne({"_id":transition.toPage}, function(err,page){
                        var result = "UNDEFINED";
                        if(page) result = page.title;
                        callback(null,result);
                    });
                }],function(err, results){
                    links.push({from:results[0],to:results[1]});
                    eachCallback();
                })
            },function(err){
                res.send(links);
            });
        });
    })
});
module.exports = router;
