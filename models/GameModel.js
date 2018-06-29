const mongoose = require('mongoose')
const Book = require('./BookSchema')

const { Schema } = mongoose

const GameStats = new Schema({

}, { toJSON: { retainKeyOrder: true }})
GameStats.set('toJSON', { retainKeyOrder: true })

const GameSchema = new Schema({
  playerId: Schema.Types.ObjectId,
  currentPageId: Schema.Types.ObjectId,
  bookId: Schema.Types.ObjectId,
  book: Book,
  bookStatus: String,
  stats: GameStats,
  objects: Schema.Types.Mixed,
  tree: [{ Type: Schema.Types.Mixed, default: [] }],
}, { toJSON: { retainKeyOrder: true }})

GameSchema.set('toJSON', { retainKeyOrder: true })

module.exports = mongoose.model('Game', GameSchema)
