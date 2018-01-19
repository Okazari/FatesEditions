const mongoose = require('mongoose')
const ObjectSchema = require('./ObjectSchema')

module.exports = mongoose.model('Object', ObjectSchema)
