const { Schema } = require('mongoose')

module.exports = new Schema({
  description: String,
  name: String,
  atStart: { type: Boolean, default: false },
  visible: { type: Boolean, default: true },
})
