const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;
const Book = require('./BookSchema');

const GameSchema   = new Schema({
    playerId: Schema.Types.ObjectId,
    currentPageId: Schema.Types.ObjectId,
    bookId: Schema.Types.ObjectId,
    book: Book,
    bookStatus: String,
    stats : Schema.Types.Mixed
});

module.exports = mongoose.model('Game', GameSchema);
