const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

module.exports = new Schema({
    fromPage: Schema.Types.ObjectId,
    toPage: Schema.Types.ObjectId,
    text: String,
    conditions: [Schema.Types.Mixed],
    conditionOperator: String,
    effects: [Schema.Types.Mixed]
});
