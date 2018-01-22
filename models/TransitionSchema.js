const { Schema } = require('mongoose')
const Effect = require('./EffectSchema')

module.exports = new Schema({
  fromPage: Schema.Types.ObjectId,
  toPage: Schema.Types.ObjectId,
  text: String,
  conditions: { type: [Effect], default: [] },
  conditionOperator: { type: String, default: 'and' },
  effects: { type:[Effect], default: [] },
}, { minimize: false })
