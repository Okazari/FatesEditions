let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {type:String, unique:true},
  password: String,
  email: String,
  books: [Schema.Types.ObjectId],
  games: [Schema.Types.ObjectId]
});

module.exports = mongoose.model("User", UserSchema);
