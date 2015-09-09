var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TransitionSchema   = new Schema({
    fromPage: String,
    toPage: String,
    text: String,
});

module.exports = mongoose.model('Transition', TransitionSchema);