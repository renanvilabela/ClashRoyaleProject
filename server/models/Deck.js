const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  name: { type: String, required: true },
  victories: { type: Number, required: true },
  losses: { type: Number, required: true },
});

module.exports = mongoose.model('Deck', deckSchema);