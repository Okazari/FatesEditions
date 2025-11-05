const { Schema } = require('mongoose')

const Effect = new Schema({
  operator: String,
  subject: String,
  value: String,
  type: String,})

module.exports = Effect
