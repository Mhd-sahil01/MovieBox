if (process.env.NODE_EVN != "production") {
    require('dotenv').config()
}
const express = require('express');
const axios = require('axios'); 

const app = express();
const port = 8000;

app.use(express.json());

app.get('/api', async (req, res) => {
    try {
        const movieApiResponse = await axios.get(process.env.API_KEY);
        res.json(movieApiResponse.data);
    } catch (error) {
        console.error('Error calling API:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Backend proxy listening at http://localhost:${port}`);
});