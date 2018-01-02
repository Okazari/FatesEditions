const mongoose = require('mongoose')
const Book = require('./BookSchema')

const { Schema } = mongoose

const GameSchema = new Schema({
  playerId: Schema.Types.ObjectId,
  currentPageId: Schema.Types.ObjectId,
  bookId: Schema.Types.ObjectId,
  book: Book,
  bookStatus: String,
  stats: Schema.Types.Mixed,
  tree: [{ Type: Schema.Types.Mixed, default: [] }],
})

module.exports = mongoose.model('Game', GameSchema)
