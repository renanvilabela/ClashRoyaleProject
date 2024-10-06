const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB (altere a string de conexão para o seu banco)
mongoose.connect('mongodb://localhost:27017/clashroyale', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Conectado ao MongoDB'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Definição de um modelo (schema) para decks
const deckSchema = new mongoose.Schema({
  name: String,
  victories: Number,
  losses: Number
});

const Deck = mongoose.model('Deck', deckSchema);

// Rota para buscar decks
app.get('/api/decks', async (req, res) => {
  try {
    const decks = await Deck.find();
    res.json(decks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar decks' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
