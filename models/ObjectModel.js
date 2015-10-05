var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ObjectSchema = new Schema({
    description: String,
    name: String,
    atStart: Boolean,
    visible: { type: Boolean, default: true },
    book: { type: Schema.Types.ObjectId, ref: 'Book' }
});

module.exports = mongoose.model('Object', ObjectSchema);