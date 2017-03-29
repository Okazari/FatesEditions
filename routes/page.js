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
    let filter = {};
    if(req.query.bookId) filter.bookId = req.query.bookId;
    Book.find(filter, "pages").then(book => res.json(book.pages), err => next(err));
});

/**
 * @method GET
 * @param pageId
 * @queryParam bookId
 * @return page object
 */
router.get('/:pageId', (req, res, next) => {
    if(req.query.bookId !== undefined && req.query.bookId !== null) {
        Book.findById(req.params.bookId)
          .where("pages._id").equals(req.params.pageId)
          .then(book => res.json(book.pages.find(page => page._id === req.params.pageId)),
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
    if ((req.query.bookId !== undefined && req.query.bookId !== null) ||
      (req.body.page !== undefined && req.body.page !== null)) {
      Book.findById(req.query.bookId)
        .then(book => {
          book.pages.push(req.body.page);
          book.save()
            .then(book => res.status(201).json(book.pages), err => next(err));
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
router.put('/:pageId', (res, req, next) => {
  if ((req.query.bookId !== undefined && req.query.bookId !== null) ||
    (req.body.pages !== undefined && req.body.pages !== null)) {
    Book.findById(req.query.bookId)
      .where("pages._id").equals(req.params.pageId)
      .then(book => {
        book.pages = req.body.pages;
        book.save()
          .then(book => res.json(book), err => next(err));
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
    if (req.query.bookId !== undefined && req.query.bookId !== null) {
      Book.findById(req.query.bookId)
        .where("pages._id").equals(req.params.pageId)
        .then(book => {
          let page = book.pages.find(page => page._id === req.params.pageId);
          book.pages.splice(book.pages.indexOf(page), 1);
          book.save()
            .then(() => {
              Transition.remove({fromPage: req.params.pageId})
                .then(() => res.sendStatus(200), err => next(err));
            }, err => next(err));
        });
    }
    else res.sendStatus(400);
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
