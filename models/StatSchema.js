const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
  description: String,
  initValue: Number,
  max: Number,
  min: Number,
  name: String,
  visible: { type: Boolean, default: true }
});
