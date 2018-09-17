const { Schema } = require('mongoose')
const Effect = require('./EffectSchema')
const Roll = require('./RollSchema')

module.exports = new Schema({
  fromPage: String,
  toPage: String,
  text: String,
  conditions: { type: [Effect], default: [] },
  conditionOperator: { type: String, default: 'and' },
  effects: { type: [Effect], default: [] },
  roll: Roll, 
}, { minimize: false })
