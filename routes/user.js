/**
 * @description User endpoint
 */
const express = require('express')
const User = require('../models/UserModel')

const router = express.Router()

/**
 * @method GET
 * @return users array username, email
 */
router.get('/', (req, res, next) => {
  User.find({}, 'username email')
    .then(users => res.json(users), err => next(err))
})

/**
 * @method GET
 * @param userId
 * @return user object username, email
 */
router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId, 'username email')
    .then(user => res.json(user), err => next(err))
})

/**
 * @method PATCH
 * @param userId
 * @return user object
 */
router.patch('/:userId', (req, res, next) => {
  User.findById(req.params.playerId)
    .then((user) => {
      let hadError = false
      if (req.body.passwords) {
        if (req.body.passwords.confirmation === req.body.passwords.new
          && req.body.passwords.old === user.password) {
          user.password = req.body.passwords.new
        } else {
          hadError = true
          if (req.body.passwords.confirmation !== req.body.passwords.new) {
            res.status(400).send({ message: 'Les mots de passe ne correspondent pas, Réessayez' })
          } else {
            res.status(403).send({ message: 'Mauvais mot de passe, Réessayez' })
          }
        }
      }
      if (!hadError) {
        user.save()
          .then(u => res.json(u), err => next(err))
      }
    }, err => next(err))
})

/**
 * @method POST
 * @return user object
 */
router.post('/', (req, res, next) => {
  if (req.body.username !== undefined && req.body.username !== null &&
      req.body.password !== undefined && req.body.password !== null) {
    const user = new User()
    user.username = req.body.username
    user.password = req.body.password
    user.save()
      .then(() => res.json(user), err => next(err))
  }
})

module.exports = router
