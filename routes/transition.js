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
    Transition.find().then(function(transitions) {
        res.json(transitions);
    },function(err){
        next(err);
    });
});

router.post('/', function(req, res, next) {
    var transition = new Transition();
    transition.fromPage = req.body.fromPage;
    transition.conditions = [];
    transition.effects = [];
    transition.conditionOperator = "and";
    transition.save().then(function() {
        res.json(transition);
    },function(err){
        next(err);
    });
});

router.patch('/:transitionId', function(req, res, next) {
    Transition.findOne({"_id":req.params.transitionId}).then(function(transition){
        req.body.toPage ? transition.toPage = req.body.toPage : transition.toPage = "";
        req.body.text ? transition.text = req.body.text : transition.text = "";
        req.body.conditions ? transition.conditions = req.body.conditions : transition.conditions = [];
        req.body.effects ? transition.effects = req.body.effects : transition.effects = [];
        req.body.conditionOperator ? transition.conditionOperator = req.body.conditionOperator : "";
        transition.save().then(function(){
            res.json(transition);
        },function(err){
            next(err);
        })
    },function(err){
        next(err);
    })
});

router.delete('/:transitionId', function(req, res, next) {
    Transition.remove({_id:req.params.transitionId}).then(function(){
        res.send(200);
    },function(err){
        next(err);
    })
});

/*
var findPage = function(idPage, callback){
   Page.findOne({"_id":idPage}).then(function(page){
       var result = page ? page.title: "UNDEFINED";
       callback(null,result);
   },function(err){
       callback(null,"UNDEFINED");
    });
};
*/

/*var findTransitions = function(transition, eachCallback){
   async.parallel({
       'from': function(callback){
           findPage(transition.fromPage, callback);
       },
       'to': function(callback){
           findPage(transition.toPage, callback);
       }
   },function(err, results){
       eachCallback(null, {from: results.from,to: results.to});
   })
};*/


/*router.get('/links', function(req, res, next) {
   var transitionsArray = [];
   Page.find({"bookId":req.query.bookId}).then(function(pages){
       async.each(pages, function(page,eachCallback){
           Transition.find({"fromPage":page._id}).then(function(transitions){
               transitionsArray = transitionsArray.concat(transitions);
               eachCallback();
           },function(err){
                next(err);
            });
       },function(err){
           if(!err) {
               var links = [];
               async.each(transitionsArray, function (transition, eachCallback) {
                   findTransitions(transition, function (err, result) {
                       if (!err) {
                           links.push(result);
                       }
                       eachCallback(err);
                   });
               }, function (err) {
                   if (!err) {
                       res.send(links);
                   } else {
                       next(err);
                   }
               });
           } else {
               next(err);
           }
       });
   },function(err){
        next(err);
    })
});*/


/*router.get('/links', function(req, res, next) {

    var transitionsArray = [];
    Page.find({"bookId":req.query.bookId},function(err, pages){
        if(err) next(err);
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
});*/

router.get('/links', function(req, res, next) {

  let transitionsArray = {nodes: [], links: []};

  let errCallback = (err) => next(err);

  let findTransitions = (page, cb) => {
    Transition.find({"fromPage": page._id}).then((transitions) => {
      if(!transitions.length) {
        transitionsArray.nodes.push({id: page.title});
        cb();
      }
      else async.each(
        transitions,
        (transition, cb) => findPage(page.title, transition.toPage, cb),
        cb
      );
    }, errCallback)
  };

  let findPage = (currentPage, pageId, cb) => {
    Page.findOne({_id: pageId}).then((page) => {
      transitionsArray.nodes.push({id: currentPage});
      transitionsArray.links.push({source: currentPage, target: page.title});
      cb();
    }, errCallback)
  };

  Page.find({"bookId": req.query.bookId}).then((pages) => {
    async.each(pages,(page, cb) => findTransitions(page, cb), (err) => err ? res.send(err) : res.send(transitionsArray));
  }, errCallback)
});
module.exports = router;
