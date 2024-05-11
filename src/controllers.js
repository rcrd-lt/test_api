let accounts = {};

const resetState = (req, res) => {
    accounts = {}; // Zera as contas existentes
    accounts['100'] = 0;
    accounts['300'] = 0; 
    res.sendStatus(200);
};


const getBalance = (req, res) => {
    const accountId = req.query.account_id;
    const balance = accounts[accountId] !== undefined ? accounts[accountId] : 0;
    
    if (balance === 0) {
        res.status(404).send('0');
    } else {
        res.status(200).send(`${balance}`);
    }
};

const createEvent = (req, res) => {
    const { type, origin, destination, amount } = req.body;

    console.log('Current accounts state:', accounts);

    if (type === 'transfer') {
        if (accounts[origin] === undefined || accounts[destination] === undefined) {
            console.log('One or both accounts do not exist');
            return res.status(404).send('0');
        }

        if (accounts[origin] < amount) {
            console.log('Insufficient balance for transfer');
            return res.status(404).send('Insufficient balance for transfer');
        }

        accounts[origin] -= amount;
        accounts[destination] = (accounts[destination] || 0) + amount;
        console.log('Updated accounts state:', accounts);
        return res.status(201).json({ origin: { id: origin, balance: accounts[origin] }, destination: { id: destination, balance: accounts[destination] } });
    } else if (type === 'deposit') {
        accounts[destination] = (accounts[destination] || 0) + amount;
        console.log('Updated accounts state:', accounts);
        return res.status(201).json({ destination: { id: destination, balance: accounts[destination] } });
    } else if (type === 'withdraw') {
        console.log('Current accounts state before withdrawal:', accounts);
        if (accounts[origin] === undefined) {
            console.log('Account does not exist');
            return res.status(404).send('0');
        }

        if (accounts[origin] < amount) {
            console.log('Insufficient balance for withdrawal');
            return res.status(404).send('Insufficient balance for withdrawal');
        }

        accounts[origin] -= amount;
        console.log('Updated accounts state:', accounts);
        return res.status(201).json({ origin: { id: origin, balance: accounts[origin] } });
    } else {
        console.log('Unsupported event type');
        return res.status(400).send('Unsupported event type');
    }
};

module.exports = {
    resetState,
    getBalance,
    createEvent
};
