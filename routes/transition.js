/**
 * @description Transition endpoint
 */
const express = require('express');
const router = express.Router();
const https = require("https");
const Transition = require('../models/TransitionSchema');
const Page = require('../models/PageSchema');
const async = require('async');

/**
 * @method GET
 * @param pageId
 * @return transitions array
 */
router.get('/:pageId', (req, res, next) => {
    Transition.find({fromPage: req.params.pageId})
      .then(transitions => res.json(transitions), err => next(err));
});

/**
 * @method POST
 * @bodyParam transition object
 * @return transition object
 */
router.post('/', (req, res, next) => {
    if(req.body.transition !== undefined && req.body.transition !== null) {
      let transition = new Transition(req.body.transition);
      transition.save()
        .then(transition => res.status(201).json(transition), err => next(err));
    }
    else res.sendStatus(400);
});

/**
 * @method PATCH
 * @param transitionId
 * @return transition object
 */
router.patch('/:transitionId', (req, res, next) => {
    Transition.findById(req.params.transitionId)
      .then(transition => {
        req.body.toPage ? transition.toPage = req.body.toPage : transition.toPage = "";
        req.body.text ? transition.text = req.body.text : transition.text = "";
        req.body.conditions ? transition.conditions = req.body.conditions : transition.conditions = [];
        req.body.effects ? transition.effects = req.body.effects : transition.effects = [];
        req.body.conditionOperator ? transition.conditionOperator = req.body.conditionOperator : "";
        transition.save()
          .then(transition => res.json(transition), err => next(err));
    }, err => next(err));
});

/**
 * @method DELETE
 * @param transitionId
 */
router.delete('/:transitionId', (req, res, next) => {
    Transition.remove({_id:req.params.transitionId})
      .then(() => res.sendStatus(200), err => next(err));
});

/**
 * @todo finish links
 */
router.get('/links', (req, res, next) => {
  let transitionsArray = {nodes: [], links: []};

  let errCallback = (err) => next(err);

  let findTransitions = (page, cb) => {
    Transition.find({fromPage: page._id}).then(transitions => {
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
    Page.findById({pageId}).then(page => {
      transitionsArray.nodes.push({id: currentPage});
      transitionsArray.links.push({source: currentPage, target: page.title});
      cb();
    }, errCallback)
  };

  Page.find({bookId: req.query.bookId})
    .then(pages => {
    async.each(pages,
      (page, cb) => findTransitions(page, cb),
      (err) => err ? res.send(err) : res.send(transitionsArray));
  }, errCallback)
});

module.exports = router;
