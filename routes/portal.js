const express = require('express')
const router = express.Router()
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const SHA512 = require('crypto-js/sha512')
const mailjet = require('node-mailjet')
  .connect('5ef5f026c64d5e328dc7a113ba724e76', 'b4f9b9ec04a009f3da2167ddd0093a38')

router.post('/login', (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((player) => {
      if (!player || SHA512(req.body.password) != player.password) {
        res.sendStatus(403)
      } else {
        // TODO Exporter le secret dans la config
        player.password = null
        const token = jwt.sign({ user: player }, 'mysecretstory', { expiresIn: 3600 })
        res.send({ token, user: player })
      }
    }, err => next(err))
})

// TODO Revoir la mécanique de changement de mot de passe
// Donner un lien afin de le modifier aussitôt
router.post('/recover', (req, res, next) => {
  User.findOne({ email: req.body.email })
  .then((player) => {
    if (!player) {
      res.sendStatus(404)
    } else {
      const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&é(-è_çà)='
      let newpassword = ''

      for (let i = 0; i < 10; i++) {
        const key = Math.floor(Math.random() * chars.length)
        newpassword += chars[key]
      }
      player.password = SHA512(newpassword)

      player.save().then(() => {
        mailjet.post('send')
          .request({
            FromEmail: 'myvirtualstorybook@gmail.com',
            FromName: 'MyVirtualStoryBook',
            Subject: 'Changement de mot de passe',
            'Text-part': '',
            // TODO Exporter le template hors du code
            'Html-part': `
              <div>Bonjour <b>${player.username}</b>,</div>
              <br/><div>vous recevez ce mail car vous avez demandé à réinitialiser votre mot de passe.</div>
              <div>Si vous n'avez jamais demandé à le changer, merci de contacter l'administateur du site en répondant à ce mail.</div>
              <br/>
              <div>Votre mot de passe temporaire est : <b>${newpassword}</b>
              <br/>
              <div>Changez le dès que possible</div>
              <div>N'hésitez pas à répondre à cet email si vous avez la moindre question à propos de l'application.</div>
              <br/>
              <div>Cordialement,</div>
              <div>MyvirtualStorybook</div>
            `,
            Recipients: [{ Email: player.email }],
          }).on('success', (response, body) => {
            // console.log(response.statusCode, body)
            res.sendStatus('200')
          }).on('error', (err, response) => {
            // console.log(response.statusCode, err)
            res.status(500)
            res.send(err)
          })
      }, err => next(err))
    }
  }, err => next(err))
})

router.post('/subscribe', (req, res, next) => {
  User.findOne({ username: req.body.username })
  .then((player) => {
    if (!player) {
      if (req.body.password === req.body.verifyPassword) {
        const newPlayer = new User()
        newPlayer.username = req.body.username
        newPlayer.email = req.body.email
        newPlayer.password = SHA512(req.body.password)
        newPlayer.tour = true
        newPlayer.save((err, p) => {
          // TODO Exporter le secret dans la config
          const token = jwt.sign({ user: p }, 'mysecretstory', { expiresIn: 3600 })
          res.send({ token, user: p })
        })
      } else {
        res.status(400)
        res.json({ message: 'Les deux mots de passe ne correspondent pas' })
      }
    } else {
      res.status(400)
      res.json({ message: 'Nom d\'utilisateur déjà pris' })
    }
  }, err => next(err))
})

module.exports = router
