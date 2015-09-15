var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TransitionSchema   = new Schema({
    fromPage: String,
    toPage: String,
    text: String,
    conditions: [Schema.Types.Mixed],
    effects: [Schema.Types.Mixed]
});

module.exports = mongoose.model('Transition', TransitionSchema);