const express = require('express');
const Deck = require('../models/Deck');
const router = express.Router();

// Rota para buscar todos os decks
router.get('/', async (req, res) => {
  try {
    const decks = await Deck.find();
    res.json(decks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para adicionar um novo deck
router.post('/', async (req, res) => {
  const deck = new Deck({
    name: req.body.name,
    victories: req.body.victories,
    losses: req.body.losses,
  });
  try {
    const newDeck = await deck.save();
    res.status(201).json(newDeck);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;