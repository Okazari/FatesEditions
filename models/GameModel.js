var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GameSchema   = new Schema({
    playerId: String,
    currentPageId: String,
    bookId: String,
    book : {
            synopsis : String,
            name : String
        },
    objects : [String],
    stats : Schema.Types.Mixed
});

module.exports = mongoose.model('Game', GameSchema);