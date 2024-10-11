const statsService = require('../Service/statsService');

// Controlador para obter a porcentagem de vitórias e derrotas por carta
exports.getCardWinRate = async (req, res) => {
    const { cardName } = req.params;
    
    try {
        const result = await statsService.calculateCardWinRate(cardName);
        res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao calcular winrate da carta:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};