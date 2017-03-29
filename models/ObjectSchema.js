const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
  description: String,
  name: String,
  atStart: Boolean,
  visible: { type: Boolean, default: true }
});
