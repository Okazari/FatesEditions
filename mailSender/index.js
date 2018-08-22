const nodemailer = require('nodemailer')
const xoauth2 = require('xoauth2')
const mailCredentials = require('./mailCredentials')

module.exports = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: mailCredentials.user,
      clientId: mailCredentials.clientId,
      clientSecret: mailCredentials.clientSecret,
      refreshToken: mailCredentials.refreshToken,
    })
  }
})
