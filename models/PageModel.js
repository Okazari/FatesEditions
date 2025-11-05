const mongoose = require('mongoose')
const PageSchema = require('./PageSchema')

module.exports = mongoose.model('Page', PageSchema)
