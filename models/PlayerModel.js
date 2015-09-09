var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlayerSchema   = new Schema({
    username: String,
    password: String,
});

module.exports = mongoose.model('Player', PlayerSchema);