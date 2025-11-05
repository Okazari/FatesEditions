const mongoose = require('mongoose')
const TransitionSchema = require('./TransitionSchema')

module.exports = mongoose.model('Transition', TransitionSchema)
