/**
 * @description Draft endpoint
 */
const express = require('express');
const router = express.Router();
const https = require("https");
const Book = require('../models/BookModel');
const User = require('../models/UserModel');

/**
 * @method GET
 * @return book array
 */
router.get('/', (req, res, next) => {
    var filters = {};
    if(req.query.authorId) filters.authorId = req.query.authorId;
    filters.draft = true
    Book.find(filters)
      .then(books => res.json(books), err => next(err));
});

/**
 * @method GET
 * @param bookId
 * @return book object
 */
router.get('/:bookId', (req, res, next) => {
  Book.findOne({_id: req.params.bookId, draft: true})
    .then(book => res.json(book), err => next(err));
});

/**
 * @method GET
 * @param bookId
 * @return objects array
 */
router.get('/:bookId/objects', (req, res, next) => {
  Book.findById(req.params.bookId, "objects")
    .then(book => res.json(book.objects), err => next(err));
});

/**
 * @method GET
 * @param bookId
 * @return stats array
 */
router.get('/:bookId/stats', (req, res, next) => {
  Book.findById(req.params.bookId, "stats")
    .then(book => res.json(book.stats), (err) => next(err));
});

/**
 * @method POST
 * @bodyParam book
 * @return book object
 */
router.post('/', (req, res, next) => {
  let book = new Book();
  User.findById(req.payload.user._id)
    .then(user => {
      if (user !== undefined && user !== null) {
        book.authorId = user._id;
        book.draft = true;
        book.save()
          .then(book => res.status(201).json(book), err => next(err));
      } else res.status(401).json({message: "Compte innexistant"});
    }, err => next(err))
});

/**
 * @method PUT
 * @param bookId
 * @bodyParam book object
 * @return book object
 */
router.put('/:bookId', (req, res, next) => {
  if(req.body !== null && req.body !== undefined) {
    Book.findByIdAndUpdate(req.params.bookId, req.body, {new: true})
      .then(draft => res.json(draft), err => next(err));
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
      if(req.body.name) book.name = req.body.name;
      if(req.body.tags) book.tags = req.body.tags;
      if(req.body.synopsis) book.synopsis = req.body.synopsis;
      if(req.body.cover) book.cover = req.body.cover;
      if(req.body.genreId) book.genreId = req.body.genreId;
      if(req.body.page) book.pages = req.body.pages;
      if(req.body.stats) book.stats = req.body.stats;
      if(req.body.objects) book.objects = req.body.objects;
      if(req.body.startingPageId) book.startingPageId = req.body.startingPageId;
      book.save()
        .then(book => res.json(book), err => next(err))
    }, err => next(err));
});

/**
 * @method DELETE
 * @param bookId
 */
router.delete('/:bookId', function(req, res, next) {
    Book.findByIdAndRemove(req.params.bookId)
      .then(() => {
        User.findById(req.payload.user._id)
          .then(user => {
            user.books.splice(user.books.indexOf(req.params.bookId), 1);
            res.sendStatus(200);
          },
          err => next(err));
    }, err => next(err));
});

module.exports = router;
