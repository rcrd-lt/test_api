const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

// resetar o estado da aplicação
router.post('/reset', controllers.resetState);

// consultar o saldo de uma conta
router.get('/balance', controllers.getBalance);

// criar eventos (depósitos, retiradas, transferências)
router.post('/event', controllers.createEvent);

module.exports = router;
