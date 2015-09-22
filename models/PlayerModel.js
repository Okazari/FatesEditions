var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlayerSchema   = new Schema({
    username: {type:String, unique:true},
    password: String,
    tour: Boolean,
    
});

module.exports = mongoose.model('Player', PlayerSchema);