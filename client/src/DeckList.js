// src/DeckList.js
import React, { useEffect, useState } from 'react';
import { fetchDecks } from './apiService';

const DeckList = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    // Chama a função para buscar os decks
    fetchDecks().then((data) => setDecks(data));
  }, []);

  return (
    <div>
      <h2>Lista de Decks</h2>
      <ul>
        {decks.map((deck) => (
          <li key={deck.id}>
            {deck.name} - Vitórias: {deck.victories} | Derrotas: {deck.losses}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeckList;
