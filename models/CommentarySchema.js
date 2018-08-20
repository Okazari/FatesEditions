const { Schema } = require('mongoose')

const Commentary = new Schema({
  text: String,
  authorId: Schema.Types.ObjectId,
  creationDate: { type: Date, default: Date.now },
  lastModificationDate: { type: Date, default: Date.now },
})

Commentary.pre('findOneAndUpdate', function(next) {
  this._update.lastModificationDate = Date.now()
  next()
})

module.exports = Commentary
