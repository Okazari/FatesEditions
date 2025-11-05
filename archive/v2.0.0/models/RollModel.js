const mongoose = require('mongoose')
const RollSchema = require('./RollSchema')

module.exports = mongoose.model('Roll', RollSchema)
