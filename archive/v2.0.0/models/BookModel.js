const mongoose = require('mongoose')
const BookSchema = require('./BookSchema')

module.exports = mongoose.model('Book', BookSchema)
