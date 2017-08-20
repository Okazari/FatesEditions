const mongoose = require('mongoose')

const { Schema } = mongoose

const GenreSchema = new Schema({
  name: String,
  icon: String,
})

module.exports = mongoose.model('Genre', GenreSchema)
