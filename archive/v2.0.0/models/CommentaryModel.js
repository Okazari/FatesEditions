const mongoose = require('mongoose')
const CommentarySchema = require('./CommentarySchema')

module.exports = mongoose.model('Commentary', CommentarySchema)
