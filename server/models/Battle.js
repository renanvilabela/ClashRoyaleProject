const mongoose = require('mongoose');

// Definindo o schema para as batalhas
const battleSchema = new mongoose.Schema({
  battle_id: String,
  p1_1: String,
  p1_2: String,
  p1_3: String,
  p1_4: String,
  p1_5: String,
  p1_6: String,
  p1_7: String,
  p1_8: String,
  p2_1: String,
  p2_2: String,
  p2_3: String,
  p2_4: String,
  p2_5: String,
  p2_6: String,
  p2_7: String,
  p2_8: String,
  p1_crowns: Number,
  p2_crowns: Number
});

// Criando o modelo Battle
const Battle = mongoose.model('Battle', battleSchema);

module.exports = Battle;