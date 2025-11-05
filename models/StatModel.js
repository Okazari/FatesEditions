const mongoose = require('mongoose')
const StatSchema = require('./StatSchema')

module.exports = mongoose.model('Stat', StatSchema)
