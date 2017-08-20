/**
 * @description Player (view) endpoint
 */
const express = require('express')
const Player = require('../models/UserModel')

const router = express.Router()

/**
 * @method GET
 * @return user array username, games (ids)
 */
router.get('/', (req, res, next) => {
  Player.find({}, 'username games')
    .where('games.length').gt(0)
    .then(players => res.json(players), err => next(err))
})

/**
 * @method GET
 * @param playerId
 * @return user object username, games (ids)
 */
router.get('/:playerId', (req, res, next) => {
  Player.findById(req.params.playerId, 'username games')
    .then(player => res.json(player), err => next(err))
})

/**
 * @method PUT
 * @param playerId
 * @bodyParam games array
 * @return player games array
 */
router.put('/:playerId', (req, res, next) => {
  if (req.body.games !== undefined && req.body.games !== null) {
    Player.findById(req.params.playerId)
      .then((player) => {
        player.games = req.body.games
        player.save()
          .then(p => res.json(p.games), err => next(err))
      }, err => next(err))
  } else {
    res.sendStatus(400)
  }
})

/**
 * @method PATCH
 * @param playerId
 * @bodyParam gameId
 * @return game object
 */
router.patch('/:playerId', (req, res, next) => {
  Player.findById(req.params.playerId)
    .then((player) => {
      if (req.body.gameId) {
        player.games.push(req.body.gameId)
      }
      player.save()
        .then(() => res.status(201).json(req.body.gameId), err => next(err))
    }, err => next(err))
})

module.exports = router
