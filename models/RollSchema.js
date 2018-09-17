const { Schema } = require('mongoose')

module.exports = new Schema({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 0 },
  modifier: { type: String, default: '' },
  stat: { type: String, default: '' },
})
