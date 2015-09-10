var express = require('express');
var router = express.Router();
var https = require("https");
var Transition = require('../models/TransitionModel');
var Page = require('../models/PageModel');
var Promise = require('promise');

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

router.get('/link', function(req, res, next) {
    Page.find({"bookId":req.query.bookId},function(err, pages){
        if(err) res.err(err);
        var promiseArray = [];
        var transitionsArray = [];
        var links = [];
        pages.forEach(function(page){
            promiseArray.push(new Promise(function(resolve, reject){
                Transition.find({fromPage:page._id},function(err, transitions){
                   transitionsArray = transitionsArray.concat(transitions);
                   if(transitions.length === 0){
                     links.push({from:page.title,to:page.title});
                   }
                   resolve();
                });
            }));
        });
        Promise.all(promiseArray).then(function(){
            transitionsArray.forEach(function(transition){
            });
            res.json(links);
        });
    })
});
module.exports = router;
