if (process.env.NODE_EVN != "production") {
    require('dotenv').config()
}
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const popularMovies = require('./data/movies');

const app = express();
const port = 8000;

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json());

const OMDB_API_KEY = process.env.API_KEY;

//search and show the result based on that
app.get('/api/search', async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required.' });
    }
    try {
        const response = await axios.get(`https://www.omdbapi.com/`, {
            params: {
                s: query,
                apikey: OMDB_API_KEY,
            },
        });
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// currently popular movie is static
app.get('/api/popular', async (req, res) => {
    const popularMovie = popularMovies;
    res.json({ results: popularMovie });
  });
  

app.listen(port, () => {
    console.log(`Backend proxy listening at http://localhost:${port}`);
});