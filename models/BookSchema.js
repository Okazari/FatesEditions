const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Page = require('./PageSchema');
const Stat = require('./StatSchema');
const Object = require('./ObjectSchema');

module.exports = new Schema({
  name: String,
  tags: [String],
  synopsis: String,
  cover: String,
  authorId: Schema.Types.ObjectId,
  genreId: Schema.Types.ObjectId,
  draft: Boolean,
  startingPageId: Schema.Types.ObjectId,
  bookRevision: String,
  pages: [Page],
  stats: [Stat],
  objects: [Object]
});
