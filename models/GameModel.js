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
  objects: Schema.Types.Mixed,
  tree: [{ Type: Schema.Types.Mixed, default: [] }],
  creationDate: Date,
  lastModificationDate: Date,
})

GameSchema.pre('init', (next) => {
  this.creationDate = Date.now()
  next()
})

GameSchema.pre('save', (next) => {
  this.lastModificationDate = Date.now()
  next()
})

module.exports = mongoose.model('Game', GameSchema)
