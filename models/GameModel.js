var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GameSchema   = new Schema({
    playerId: String,
    currentPageId: String,
    bookId: String
});

module.exports = mongoose.model('Game', GameSchema);