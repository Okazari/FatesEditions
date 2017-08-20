const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  email: String,
})

module.exports = mongoose.model('User', UserSchema)
