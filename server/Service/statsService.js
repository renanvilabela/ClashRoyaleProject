// statsService.js
const Battle = require('../models/battle');

// Função para calcular a porcentagem de vitórias e derrotas de uma carta
exports.calculateCardWinRate = async (cardName) => {
    // Busca todas as batalhas que incluam a carta especificada
    const battles = await Battle.find({
        $or: [
            { 'p1_1': cardName },
            { 'p1_2': cardName },
            { 'p1_3': cardName },
            { 'p1_4': cardName },
            { 'p1_5': cardName },
            { 'p1_6': cardName },
            { 'p1_7': cardName },
            { 'p1_8': cardName },
            { 'p2_1': cardName },
            { 'p2_2': cardName },
            { 'p2_3': cardName },
            { 'p2_4': cardName },
            { 'p2_5': cardName },
            { 'p2_6': cardName },
            { 'p2_7': cardName },
            { 'p2_8': cardName }
        ]
    });

    if (!battles.length) {
        return { message: `Nenhuma batalha encontrada com a carta ${cardName}.` };
    }

    // Calcula as vitórias
    let player1Wins = 0;
    let player2Wins = 0;

    battles.forEach(battle => {
        if (battle.p1_crowns > battle.p2_crowns) {
            player1Wins++;
        } else if (battle.p2_crowns > battle.p1_crowns) {
            player2Wins++;
        }
    });

    const totalWins = player1Wins + player2Wins;

    return {
        player1Wins,
        player2Wins,
        totalWins
    };
};
