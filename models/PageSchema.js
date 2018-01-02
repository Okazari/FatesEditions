const { Schema } = require('mongoose')
const Transition = require('./TransitionSchema')

module.exports = new Schema({
  _id: { type: Schema.Types.ObjectId, index: true, auto: true },
  title: String,
  text: String,
  description: String,
  backgroundMusic: String,
  transitions: [Transition],
  effects: [Schema.Types.Mixed],
}, { minimize: false })
