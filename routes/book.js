/**
 * @description Book enpoint
 */
const express = require('express');
const router = express.Router();
const https = require("https");
const Book = require('../models/BookModel');
const Game = require('../models/GameModel');

/**
 * @method GET
 * @queryParam authorId
 * @return array of books
 */
router.get('/', (req, res, next) => {
    let filter = {};
    filter.draft = false;
    if(req.query.authorId) filter.authorId = req.query.authorId;
    Book.find(filter).then(books => res.json(books), err => next(err));
});

/**
 * @method GET
 * @param bookId
 * @return book object
 */
router.get('/:bookId', (req, res, next) => {
  Book.findById(req.params.bookId)
    .then(book => res.json(book), err => next(err));
});

/**
 * @method PUT
 * @param bookId
 * @return book object
 */
router.put('/:bookId', (req, res, next) => {
  if(req.body.book !== null && req.body.book !== undefined) {
    Book.findByIdAndUpdate(req.params.bookId, req.body.book)
      .then(book => res.json(book), err => next(err));
  }
  else res.sendStatus(400);
});

/**
 * @method PATCH
 * @param bookId
 * @return book object
 */
router.patch('/:bookId', (req, res, next) => {
  Book.findById(req.params.bookId)
    .then(book => {
      book.draft = false;
      book.revision = parseInt(book.revision) + 1;
      book.save()
        .then(() => {
          Game.find({bookId: book._id})
            .then(games => {
              games.map(game => game.bookStatus = "updated");
              res.status(200).json(book);
            }, err => next(err));
        }, err => next(err))
    }, err => next(err));
});

/**
 * @method DELETE
 * @param bookId
 */
router.delete('/:bookId', (req, res, next) => {
  Book.findById(req.params.bookId)
    .then((book) => {
      book.draft = true;
      book.save()
        .then(
          () => {
            Game.find({bookId: req.params.bookId})
              .then(
                games => games.map(game => game.bookStatus = "removed"),
                err => next(err));
          }, err => next(err));
    }, err => next(err));
});

module.exports = router;
