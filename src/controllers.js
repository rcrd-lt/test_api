// src/controllers.js
let accounts = {};

const resetState = (req, res) => {
  accounts = {};
  res.sendStatus(200);
};

const getBalance = (req, res) => {
    const accountId = req.query.account_id;
    const balance = accounts[accountId] !== undefined ? accounts[accountId] : 0;
    
    if (balance === 0) {
        res.status(404).send('0');
    } else {
        res.status(200).json({ balance });
    }
};

const createEvent = (req, res) => {
    const { type, origin, destination, amount } = req.body;

    if (type === 'transfer') {
        if (accounts[origin] !== undefined && accounts[origin] >= amount && accounts[destination] !== undefined) {
            accounts[origin] -= amount;
            accounts[destination] = (accounts[destination] || 0) + amount;
            res.status(201).json({ origin: { id: origin, balance: accounts[origin] }, destination: { id: destination, balance: accounts[destination] } });
        } else {
            res.status(404).send('0');
        }
    } else if (type === 'deposit') {
        accounts[destination] = (accounts[destination] || 0) + amount;
        res.status(201).json({ destination: { id: destination, balance: accounts[destination] } });
    } else if (type === 'withdraw') {
        if (accounts[origin] !== undefined && accounts[origin] >= amount) {
            accounts[origin] -= amount;
            res.status(201).json({ origin: { id: origin, balance: accounts[origin] } });
        } else {
            res.status(404).send('0');
        }
    } else {
        res.status(400).send('Unsupported event type');
    }
};

module.exports = {
  resetState,
  getBalance,
  createEvent
};
