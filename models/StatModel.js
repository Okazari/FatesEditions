var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StatSchema = new Schema({
    description: String,
    initValue: Number,
    max: Number,
    min: Number,
    name: String,
    visible: { type: Boolean, default: true },
    book: { type: Schema.Types.ObjectId, ref: 'Book' }
})

module.exports = mongoose.model('Stat', StatSchema);