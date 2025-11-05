const { Schema } = require('mongoose')

module.exports = new Schema({
  description: String,
  initValue: Number,
  max: Number,
  min: Number,
  name: String,
  icon: String,
  visible: { type: Boolean, default: true },
})
