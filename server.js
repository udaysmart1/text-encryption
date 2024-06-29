const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { encrypt, decrypt } = require('./encryption');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.post('/encrypt', (req, res) => {
    const { text } = req.body;
    const encrypted = encrypt(text);
    res.json({ result: encrypted });
});

app.post('/decrypt', (req, res) => {
    const { text } = req.body;
    const decrypted = decrypt(text);
    res.json({ result: decrypted });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
