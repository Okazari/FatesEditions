const { Schema } = require('mongoose')
const Page = require('./PageSchema')
const Stat = require('./StatSchema')
const Object = require('./ObjectSchema')

const Book = new Schema({
  name: String,
  tags: [String],
  synopsis: String,
  cover: String,
  authorId: Schema.Types.ObjectId,
  genreId: Schema.Types.ObjectId,
  draft: { type: Boolean, default: true },
  startingPageId: Schema.Types.ObjectId,
  revision: { type: Number, default: 0 },
  pages: [Page],
  stats: [Stat],
  objects: [Object],
  creationDate: { type: Date, default: Date.now },
  lastModificationDate: { type: Date, default: Date.now },
})

Book.pre('findOneAndUpdate', function(next) {
  this._update.lastModificationDate = Date.now()
  next()
})

module.exports = Book
