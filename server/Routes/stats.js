const express = require('express');
const Battle = require('../models/battle'); // Verifique se o caminho está correto

const router = express.Router();

// Rota para contar vitórias de um jogador com uma carta específica
router.get('/card-winrate/:cardName', async (req, res) => {
  const { cardName } = req.params;

  try {
    // Contar vitórias do player 1 com a carta especificada
    const player1Wins = await Battle.countDocuments({
      $or: [
        { p1_1: cardName, 'player_1.victory': true },
        { p1_2: cardName, 'player_1.victory': true },
        { p1_3: cardName, 'player_1.victory': true },
        { p1_4: cardName, 'player_1.victory': true },
        { p1_5: cardName, 'player_1.victory': true },
        { p1_6: cardName, 'player_1.victory': true },
        { p1_7: cardName, 'player_1.victory': true },
        { p1_8: cardName, 'player_1.victory': true }
      ]
    });

    // Contar vitórias do player 2 com a carta especificada
    const player2Wins = await Battle.countDocuments({
      $or: [
        { p2_1: cardName, 'player_2.victory': true },
        { p2_2: cardName, 'player_2.victory': true },
        { p2_3: cardName, 'player_2.victory': true },
        { p2_4: cardName, 'player_2.victory': true },
        { p2_5: cardName, 'player_2.victory': true },
        { p2_6: cardName, 'player_2.victory': true },
        { p2_7: cardName, 'player_2.victory': true },
        { p2_8: cardName, 'player_2.victory': true }
      ]
    });

    // Retornar a contagem total de vitórias
    res.json({
      player1Wins,
      player2Wins,
      totalWins: player1Wins + player2Wins
    });
  } catch (error) {
    console.error('Erro ao contar vitórias:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;