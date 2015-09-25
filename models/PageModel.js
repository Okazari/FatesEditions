var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PageSchema   = new Schema({
    title: String,
    text: String,
    description: String,
    backgroundMusic: String,
    transitions: String,
    bookId: String,
    effects: [Schema.Types.Mixed]
});

module.exports = mongoose.model('Page', PageSchema);