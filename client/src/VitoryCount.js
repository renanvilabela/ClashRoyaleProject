import React, { useState } from 'react';

const VictoryCount = () => {
  // Exemplo: o número de vitórias pode ser obtido de uma API ou calculado com lógica própria
  const [victories, setVictories] = useState(0);

  const handleVictory = () => {
    setVictories(victories + 1);  // Exemplo de incremento simples
  };

  return (
    <div>
      <h2>Quantidade de Vitórias</h2>
      <p>Total de Vitórias: {victories}</p>
      <button onClick={handleVictory}>Adicionar Vitória</button>
    </div>
  );
};

export default VictoryCount;