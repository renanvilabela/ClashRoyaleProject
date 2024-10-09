// src/DeckList.js
import React, { useEffect, useState } from 'react';
import { fetchDecks } from './apiService';

const DeckList = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/decks')
      .then((response) => response.json())
      .then((data) => setDecks(data))
      .catch((error) => console.error('Erro ao buscar decks:', error));
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
