const { Schema } = require('mongoose')

module.exports = new Schema({
  description: String,
  name: String,
  icon: String,
  atStart: Boolean,
  visible: { type: Boolean, default: true },
})
