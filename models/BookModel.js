var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var PageModel    = require('./PageModel');

var BookSchema   = new Schema({
    name: String,
    tags: [String],
    synopsis: String,
    cover: String,
    authorId:String,
    authorName:String,
    genreId: String,
    draft: Boolean,
    startingPageId: String,
    stats:[{
        description: String,
        initValue: Number,
        max: Number,
        min: Number,
        name: String,
    }]
});

module.exports = mongoose.model('Book', BookSchema);