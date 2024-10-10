import React, { useState } from 'react';
import axios from 'axios';

const WinPercent = () => {
  const [cardName, setCardName] = useState(''); // Estado para armazenar o nome da carta
  const [result, setResult] = useState(null);   // Estado para armazenar o resultado da API
  const [error, setError] = useState(null);     // Estado para armazenar possíveis erros

  const handleInputChange = (event) => {
    setCardName(event.target.value);  // Atualiza o estado conforme o usuário digita o nome da carta
  };

  const handleSubmit = async (event) => {
    event.preventDefault();  // Evita o reload da página ao enviar o formulário
    try {
      const response = await axios.get(`http://localhost:5000/battles/card-winrate/${cardName}`);
      setResult(response.data);  // Define o resultado da API no estado
      setError(null);            // Limpa o erro anterior, se existir
    } catch (err) {
      setError('Erro ao buscar dados. Verifique o nome da carta e tente novamente.');
      setResult(null);  // Limpa o resultado em caso de erro
    }
  };

  return (
    <div>
      <h2>Verificar Porcentagem de Vitórias por Carta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da Carta"
          value={cardName}
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div>
          <h3>Resultados para: {result.card}</h3>
          <p>Total de Batalhas: {result.totalBattles}</p>
          <p>Vitórias: {result.wins}</p>
          <p>Derrotas: {result.losses}</p>
          <p>Porcentagem de Vitórias: {result.winPercentage}%</p>
          <p>Porcentagem de Derrotas: {result.lossPercentage}%</p>
        </div>
      )}
    </div>
  );
};

export default WinPercent;
