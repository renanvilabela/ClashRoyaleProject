const mongoose = require('mongoose');

// Definindo o schema para as batalhas
const battleSchema = new mongoose.Schema({
  battle_id: String,
  player_1: {
    id: String,
    trophies: Number,
    deck: [String], // Array de strings representando as cartas
    victory: Boolean,
    timestamp: Date,
    towers_destroyed: Number
  },
  player_2: {
    id: String,
    trophies: Number,
    deck: [String],
    victory: Boolean,
    timestamp: Date,
    towers_destroyed: Number
  },
  duration_seconds: Number
});

// Criando o modelo Battle
const Battle = mongoose.model('Battle', battleSchema);

module.exports = Battle;