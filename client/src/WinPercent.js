import React, { useState } from 'react';
import axios from 'axios';

const WinPercent = () => {
  const [cardName, setCardName] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    try {
      const response = await axios.get(`http://localhost:5000/battles/card-winrate/${cardName}`);
      setResults(response.data);
    } catch (err) {
      setError('Erro ao buscar as informações. Tente novamente.');
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Win Rate da Carta</h1>
      <input
        type="text"
        placeholder="Nome da Carta"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {results && (
        <div>
          <h2>Resultados:</h2>
          <p>Vitórias Player 1: {results.player1Wins}</p>
          <p>Vitórias Player 2: {results.player2Wins}</p>
          <p>Vitórias Totais: {results.totalWins}</p>
        </div>
      )}
    </div>
  );
};

export default WinPercent;
