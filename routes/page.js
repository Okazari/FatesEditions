/**
 * @description Page (view) endpoint
 */
const express = require('express');
const router = express.Router();
const https = require("https");
const Book = require('../models/BookModel');
const Transition = require('../models/TransitionSchema');

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
 * @queryParam bookId
 * @return page object
 */
router.get('/:pageId', (req, res, next) => {
    if(req.query.bookId !== undefined && req.query.bookId !== null) {
        Book.findById(req.query.bookId, {pages: {$elemMatch: {_id: req.params.pageId}}})
          .then(book => res.json(book.pages),
            err => next(err));
    }
    else res.sendStatus(400);
});

/**
 * @method POST
 * @queryParam bookId
 * @bodyParam page object
 * @return page object
 */
router.post('/', (req, res, next) => {
    if ((req.body.bookId !== undefined && req.body.bookId !== null) ||
      (req.body.page !== undefined && req.body.page !== null)) {
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
  if (!!req.body) {
    Book.findOne({"pages._id": req.params.pageId})
      .then(book => {
        const pageIndex = book.pages.findIndex(page => page._id.toString() === req.params.pageId);
        book.pages[pageIndex] = req.body;
        book.save();
        res.json(book)
      }, err => next(err));
  }
  else res.sendStatus(400);
});

/**
 * @method PATCH
 * @queryParam bookId
 * @return page object
 */
router.patch('/:pageId', (req, res, next) => {
    if (req.query.bookId !== undefined && req.query.bookId !== null) {
      Book.findById(req.query.bookId)
        .where("pages._id").equals(req.params.pageId)
        .then(book => {
          let page = book.pages.find(page => page._id === req.params.pageId);
          if(req.body.title) page.title = req.body.title;
          if(req.body.text) page.text = req.body.text;
          if(req.body.description) page.description = req.body.description;
          if(req.body.backgroundMusic) page.backgroundMusic = req.body.backgroundMusic;
          if(req.body.bookId) page.bookId = req.body.bookId;
          if(req.body.effects) page.effects = req.body.effects;
          if(req.body.backgroundMusic) page.backgroundMusic = req.body.backgroundMusic;
          book.save()
            .then(book => res.json(book.pages.find(page => page._id === req.params.pageId)),
              err => next(err));
        }, err => next(err));
    }
    else res.sendStatus(400);
});

/**
 * @method DELETE
 * @queryParam bookId
 */
router.delete('/:pageId', (req, res, next) => {
  Book.findOne({"pages._id": req.params.pageId})
    .then(book => {
      const pageIndex = book.pages.findIndex(page => page._id.toString() === req.params.pageId);
      book.pages.splice(pageIndex,1);
      book.save()
        .then(() => {
          Transition.remove({fromPage: req.params.pageId})
            .then(() => res.json(book), err => next(err));
        }, err => next(err));
    });
});

/**
 * @method GET
 * @param pageId
 * @return transition object
 */
router.get('/:pageId/transition', (req, res, next) => {
    Transition.find({fromPage: req.params.pageId})
      .then((transitions) => res.send(transitions), err => next(err));
});

module.exports = router;
