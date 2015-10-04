var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var PageSchema    = require('./PageModel');

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
        visible: { type: Boolean, default: true }
    }],
    objects:[{
        description: String,
        name: String,
        atStart: Boolean,
        visible: { type: Boolean, default: true },
    }]
});

module.exports = mongoose.model('Book', BookSchema);