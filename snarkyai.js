const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.get('/get-api-key', (req, res) => {
    const token = req.headers['x-api-token'];
    if (token !== process.env.MY_APP_TOKEN) {
        return res.status(403).json({ error: 'Forbidden' });
    }
    res.json({ apiKey: API_KEY });
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
