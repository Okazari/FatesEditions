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
  creationDate: {type: Date, default: Date.now},
  lastModificationDate: {type: Date, default: Date.now},
})


GameSchema.pre('findOneAndUpdate', function(next) {
  this._update.lastModificationDate = Date.now()
  next()
})

module.exports = mongoose.model('Game', GameSchema)
