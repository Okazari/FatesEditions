const { Schema } = require('mongoose')
const Transition = require('./TransitionSchema')
const Effect = require('./EffectSchema')

module.exports = new Schema({
  _id: { type: Schema.Types.ObjectId, index: true, auto: true },
  title: String,
  text: String,
  description: String,
  backgroundMusic: String,
  transitions: {type:[Transition], default: []},
  effects: [Effect],
}, { minimize: false })
