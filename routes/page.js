/**
 * @description Page (view) endpoint
 */
const express = require('express');
const router = express.Router();
const https = require("https");
const Book = require('../models/BookModel');

/**
 * @method GET
 * @queryParam bookId
 * @return page array
 */
router.get('/', (req, res, next) => {
    if(req.query.bookId) {
      Book.findById(req.query.bookId, "pages").then(book => res.json(book.pages), err => next(err));
    }
    else res.sendStatus(400);
});

/**
 * @method GET
 * @param pageId
 * @return page object
 */
router.get('/:pageId', (req, res, next) => {
    Book.findOne({"pages._id": req.params.pageId}, { pages: { $elemMatch: { _id: req.params.pageId } } })
      .then(book => res.json(book.pages[0]),
        err => next(err));
});

/**
 * @method POST
 * @bodyParam bookId
 * @bodyParam page object
 * @return page object
 */
router.post('/', (req, res, next) => {
    if (req.body.bookId && req.body.page) {
      Book.findById(req.body.bookId)
        .then(book => {
          const page = book.pages.create(req.body.page)
          book.pages.push(page);
          book.save()
            .then(() => res.status(201).json(page), err => next(err));
        }, err => next(err));
    }
    else res.sendStatus(400);
});

/**
 * @method PUT
 * @queryParam bookId
 * @bodyParam page object
 * @return page object
 */
router.put('/:pageId', (req, res, next) => {
  if (req.body) {
    Book.findOneAndUpdate({"pages._id": req.params.pageId}, {$set: {'pages.$': req.body}}, {new: true})
      .then(book => {
        const pageIndex = book.pages.findIndex(page => page._id.toString() === req.params.pageId)
        res.json(book.pages[pageIndex])
      }, err => next(err))
  }
  else res.sendStatus(400);
});

/**
 * @method PATCH
 * @return page object
 */
router.patch('/:pageId', (req, res, next) => {
  Book.findOne({"pages._id": req.params.pageId}, { pages: { $elemMatch: { _id: req.params.pageId } } })
    .then(book => {
      let page = book.pages[0];
      if(req.body.title) page.title = req.body.title;
      if(req.body.text) page.text = req.body.text;
      if(req.body.description) page.description = req.body.description;
      if(req.body.backgroundMusic) page.backgroundMusic = req.body.backgroundMusic;
      if(req.body.bookId) page.bookId = req.body.bookId;
      if(req.body.effects) page.effects = req.body.effects;
      if(req.body.backgroundMusic) page.backgroundMusic = req.body.backgroundMusic;
      book.update()
        .then(() => res.json(page),
          err => next(err));
    }, err => next(err));
});

/**
 * @method DELETE
 */
router.delete('/:pageId', (req, res, next) => {
  Book.findOne({"pages._id": req.params.pageId})
    .then(book => {
      if(!book) res.sendStatus(404);
      const pageIndex = book.pages.findIndex(page => page._id.toString() === req.params.pageId);
      book.pages.splice(pageIndex,1);
      book.pages.forEach((page, pageIndex) => {
        page.transitions.forEach((transition, transitionIndex) => {
          if(transition.toPage.toString() === req.params.pageId) {
            book.pages[pageIndex].transitions.splice(transitionIndex,1)
          }
        })
      });
      book.save()
        .then(() => res.json(book.pages), err => next(err));
      }, err => next(err));
});

module.exports = router;
