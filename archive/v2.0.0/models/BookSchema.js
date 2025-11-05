const { Schema } = require('mongoose')
const Page = require('./PageSchema')
const Stat = require('./StatSchema')
const Item = require('./ObjectSchema')
const Commentary = require('./CommentarySchema')

const Book = new Schema({
  name: { type: String, default: 'Livre sans titre'},
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
  objects: [Item],
  commentaries: [Commentary],
  creationDate: { type: Date, default: Date.now },
  lastModificationDate: { type: Date, default: Date.now },
})

Book.pre('findOneAndUpdate', function(next) {
  this._update.lastModificationDate = Date.now()
  next()
})

module.exports = Book
