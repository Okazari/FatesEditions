const { Schema } = require('mongoose')
const Effect = require('./EffectSchema')

module.exports = new Schema({
  fromPage: String,
  toPage: String,
  text: String,
  conditions: { type: [Effect], default: [] },
  conditionOperator: { type: String, default: 'and' },
  effects: { type: [Effect], default: [] },
}, { minimize: false })
