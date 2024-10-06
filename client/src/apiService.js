// src/apiService.js
const API_URL = 'http://localhost:5000/api';

// Função para buscar decks
export const fetchDecks = async () => {
  try {
    const response = await fetch(`${API_URL}/decks`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar decks:', error);
    return [];
  }
};

// export const fetchWinPercentage = async () => {
//     try {
//       const response = await fetch(`${API_URL}/win-percentage`);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Erro ao buscar porcentagem de vitórias:', error);
//       return [];
//     }
//   };
  
//   export const fetchLossCount = async () => {
//     try {
//       const response = await fetch(`${API_URL}/loss-count`);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Erro ao buscar quantidade de derrotas:', error);
//       return [];
//     }
//   };
  
