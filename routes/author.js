/**
 * @description Author (view) endpoint
 */
const express = require('express')
const router = express.Router()
const Auhtor = require('../models/UserModel')

/**
 * @method GET
 * @return array of author (if books length > 0) usernames and books (ids)
 */
router.get('/', (req, res, next) => {
  Auhtor.find({}, 'username books')
    .where('books.length').gt(0)
    .then(authors => res.json(authors), err => next(err))
})

/**
 * @method GET
 * @param authorId
 * @return author username and books (ids)
 */
router.get('/:authorId', (req, res, next) => {
  Auhtor.findById(req.params.authorId, 'username books')
    .then(author => res.json(author), err => next(err))
})

/**
 * @method PUT
 * @param authorId
 * @bodyParam array of book
 * @return array of book
 */
router.put('/:authorId', (req, res, next) => {
  if (req.body.books !== undefined && req.body.books !== null) {
    Auhtor.findById(req.params.authorId)
      .then((author) => {
        author.books = req.body.books
        author.save()
          .then(a => res.json(a.books), err => next(err))
      }, err => next(err))
  } else {
    res.sendStatus(400)
  }
})

/**
 * @method PATCH
 * @param authorId
 * @bodyParam book object
 * @return array of book
 */
router.patch('/:authorId', (req, res, next) => {
  Auhtor.findById(req.params.authorId)
    .then((author) => {
      if (req.body.bookId) {
        author.books.push(req.params.bookId)
      }
      author.save()
        .then(a => res.json(a.books), err => next(err))
    }, err => next(err))
})

module.exports = router
