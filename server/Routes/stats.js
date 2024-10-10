const express = require('express');
const router = express.Router();
const Battle = require('../models/battle');  

// Rota para obter porcentagem de vitórias por carta
router.get('/card-winrate/:cardName', async (req, res) => {
  try {
    const cardName = req.params.cardName;

    // Agregação para calcular as estatísticas de vitórias e derrotas para a carta
    const result = await Battle.aggregate([
      {
        $match: {
          $or: [
            { p1_1: cardName }, { p1_2: cardName }, { p1_3: cardName }, { p1_4: cardName }, { p1_5: cardName }, { p1_6: cardName }, { p1_7: cardName }, { p1_8: cardName },
            { p2_1: cardName }, { p2_2: cardName }, { p2_3: cardName }, { p2_4: cardName }, { p2_5: cardName }, { p2_6: cardName }, { p2_7: cardName }, { p2_8: cardName }
          ]
        }
      },
      {
        $group: {
          _id: null,
          totalBattles: { $sum: 1 },
          wins: { $sum: { $cond: [{ $gt: ['$p1_crowns', '$p2_crowns'] }, 1, 0] } },
          losses: { $sum: { $cond: [{ $lt: ['$p1_crowns', '$p2_crowns'] }, 1, 0] } }
        }
      },
      {
        $project: {
          _id: 0,
          totalBattles: 1,
          wins: 1,
          losses: 1,
          winPercentage: { $multiply: [{ $divide: ['$wins', '$totalBattles'] }, 100] },
          lossPercentage: { $multiply: [{ $divide: ['$losses', '$totalBattles'] }, 100] }
        }
      }
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: 'Carta não encontrada ou sem resultados.' });
    }

    res.json({ card: cardName, ...result[0] });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao processar a requisição.', error });
  }
});

module.exports = router;
