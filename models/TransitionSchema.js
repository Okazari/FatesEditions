const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

module.exports = new Schema({
    fromPage: Schema.Types.ObjectId,
    toPage: Schema.Types.ObjectId,
    text: String,
    conditions: { type: [Schema.Types.Mixed], default: {}},
    conditionOperator: String,
    effects: [Schema.Types.Mixed]
}, { minimize: false });
