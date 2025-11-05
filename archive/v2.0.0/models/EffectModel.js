const mongoose = require('mongoose')
const EffectSchema = require('./EffectSchema')

module.exports = mongoose.model('Effect', EffectSchema)
