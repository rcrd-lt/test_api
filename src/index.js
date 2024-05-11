// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Roteamento
app.use('/', routes);

// Rota padrão para a raiz do servidor
app.get('/', (req, res) => {
    res.send('Bem-vindo à API de exemplo. Consulte a documentação para obter mais informações.');
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
