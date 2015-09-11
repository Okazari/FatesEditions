var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var PageModel    = require('./PageModel');

var BookSchema   = new Schema({
    name: String,
    tags: [String],
    synopsis: String,
    cover: String,
    authorId: String,
    genreId: String,
    draft: Boolean,
    startingPageId: String,
});

module.exports = mongoose.model('Book', BookSchema);