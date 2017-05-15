/**
 * @description Transition endpoint
 */
const express = require('express');
const router = express.Router();
const https = require("https");
const Book = require('../models/BookModel');

/**
 * @method GET
 * @query bookId
 * @return link object for D3Service
 */
router.get('/links', (req, res, next) => {
  if(!!req.query.bookId) {
    Book.findById(req.query.bookId, "pages")
      .then(book => {
        let transitionsArray = {nodes: [], links: []};
        book.pages.map(page => {
          transitionsArray.nodes.push({id: page.title})
          page.transitions.map(transition => {
            transitionsArray.links.push({
              source: book.pages.find(page => page._id.toString() === transition.fromPage.toString()).title,
              target: book.pages.find(page => page._id.toString() === transition.toPage.toString()).title
            })
          })
        })
        return res.json(transitionsArray)
      }, err => next(err))
  }
  else {
    res.sendStatus(400);
  }
});

/**
 * @method GET
 * @param pageId
 * @return transitions array
 */
router.get('/:pageId', (req, res, next) => {
    if(!!req.query.bookId) {
      Book.findById(req.query.bookId, {pages: {$elemMatch: {_id: req.params.pageId}}})
        .select("pages.transitions")
        .then(book => res.json(book.pages[0].transitions), err => next(err))
    }
    else res.sendStatus(400);
});

module.exports = router;
