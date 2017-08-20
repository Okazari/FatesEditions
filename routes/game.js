/**
 * @description Game endpoint
 */
const express = require('express')
const Game = require('../models/GameModel')
const Book = require('../models/BookModel')
const User = require('../models/UserModel')

const router = express.Router()

/**
 * @method GET
 * @queryParam playerId
 * @return games array
 */
router.get('/', (req, res, next) => {
  const filter = {}
  if (req.query.playerId) {
    filter.playerId = req.query.playerId
  }
  Game.find(filter)
    .then(games => res.json(games), err => next(err))
})

/**
 * @method GET
 * @param gameId
 * @return game object
 */
router.get('/:gameId', (req, res, next) => {
  Game.findById(req.params.gameId)
    .then(game => res.json(game), err => next(err))
})

/**
 * @method POST
 * @return game object
 */
router.post('/', (req, res, next) => {
  if ((req.params.playerId !== undefined && req.params.playerId !== null) ||
    (req.params.currentPageId !== undefined && req.params.currentPageId !== null) ||
    (req.params.bookId !== undefined && req.params.bookId !== null)) {
    const game = new Game()
    game.playerId = req.body.playerId
    game.currentPageId = req.body.currentPageId
    game.bookId = req.body.bookId

    Book.findById(req.body.bookId)
      .then((book) => {
        game.book = book
        game.stats = {}
        book.stats.map(stat => game.stats[stat._id] = stat.initValue)
        game.save()
          .then(() => res.status(201).json(game), err => next(err))
      }, err => next(err))
  } else {
    res.sendStatus(400)
  }
})

/**
 * @method PUT
 * @bodyParam game
 * @return game object
 */
router.put('/:gameId', (req, res, next) => {
  if (req.body.game !== null && req.body.game !== undefined) {
    Game.findByIdAndUpdate(req.params.gameId, req.body.game)
      .then(game => res.json(game), err => next(err))
  } else {
    res.sendStatus(400)
  }
})

/**
 * @method PATCH
 * @param gameId
 * @return game object
 */
router.patch('/:gameId', (req, res, next) => {
  Game.findById(req.params.gameId)
    .then((game) => {
      if (req.body.currentPageId) game.currentPageId = req.body.currentPageId
      if (req.body.stats) game.stats = req.body.stats
      game.save()
        .then(g => res.json(g), err => next(err))
    }, err => next(err))
})

/**
 * @method DELETE
 * @param gameId
 */
router.delete('/:gameId', (req, res, next) => {
  Game.findByIdAndRemove(req.params.gameId)
    .then(() => res.send('deleted'), err => next(err))
})

module.exports = router
