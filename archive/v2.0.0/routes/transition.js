/**
 * @description Transition endpoint
 */
const express = require('express')
const Book = require('../models/BookModel')

const router = express.Router()

/**
 * @method GET
 * @query bookId
 * @return link object for D3Service
 */
router.get('/links', (req, res, next) => {
  if (req.query.bookId) {
    Book.findById(req.query.bookId, 'pages')
      .then((book) => {
        const transitionsArray = { nodes: [], links: [] }
        book.pages.map((page) => {
          transitionsArray.nodes.push({ id: page.title })
          page.transitions.map((transition) => {
            transitionsArray.links.push({
              source: book.pages.find((p) => {
                p._id.toString() === transition.fromPage.toString()
              }).title,
              target: book.pages.find((p) => {
                p._id.toString() === transition.toPage.toString()
              }).title,
            })
          })
        })
        return res.json(transitionsArray)
      }, err => next(err))
  } else {
    res.sendStatus(400)
  }
})

module.exports = router
