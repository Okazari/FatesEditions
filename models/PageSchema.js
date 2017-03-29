const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;
const Transition = require('./TransitionSchema');

module.exports = new Schema({
    title: String,
    text: String,
    description: String,
    backgroundMusic: String,
    transitions: [Transition],
    effects: [Schema.Types.Mixed]
});
