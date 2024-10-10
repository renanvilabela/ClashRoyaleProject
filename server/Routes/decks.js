const express = require('express');
const router = express.Router();
const Battle = require('../models/battle');
const Deck = require('../models/Deck');

// Rota para criar uma nova batalha
router.post('/add', async (req, res) => {
  const { battle_id, player_1, player_2, duration_seconds } = req.body;

  try {
    const newBattle = new Battle({
      battle_id,
      player_1,
      player_2,
      duration_seconds
    });
    
    await newBattle.save();
    res.status(201).json({ message: 'Batalha adicionada com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar batalha', error });
  }
});

// Rota para obter todas as batalhas
router.get('/all', async (req, res) => {
  try {
    const battles = await Battle.find();
    res.status(200).json(battles);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar batalhas', error });
  }
});

module.exports = router;
