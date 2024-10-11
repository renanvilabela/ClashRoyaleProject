const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado com sucesso!'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rota padrão para verificar se a API está funcionando
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Importar e usar a rota de estatísticas
const statsRoutes = require('./Routes/stats');
app.use('/battles', statsRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
