const { Schema } = require('mongoose')

module.exports = new Schema({
  active: { type: Boolean, default: false },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 0 },
  modifier: { type: String, default: '' },
  stat: { type: String, default: '' },
})
