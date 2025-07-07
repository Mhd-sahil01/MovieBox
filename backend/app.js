if (process.env.NODE_EVN != "production") {
    require('dotenv').config()
}
const express = require('express');
const axios = require('axios');
const cors = require('cors');

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
    const popularMovies = [
      { title: 'Inception', year: '2010', imdbID: 'tt1375666' },
      { title: 'The Dark Knight', year: '2008', imdbID: 'tt0468569' },
      { title: 'Interstellar', year: '2014', imdbID: 'tt0816692' },
      { title: 'The Matrix', year: '1999', imdbID: 'tt0133093' },
      { title: 'Fight Club', year: '1999', imdbID: 'tt0137523' },
      { title: 'Pulp Fiction', year: '1994', imdbID: 'tt0110912' },
      { title: 'Forrest Gump', year: '1994', imdbID: 'tt0109830' },
      { title: 'The Shawshank Redemption', year: '1994', imdbID: 'tt0111161' },
      { title: 'The Godfather', year: '1972', imdbID: 'tt0068646' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001', imdbID: 'tt0120737' },
      { title: 'Avengers: Endgame', year: '2019', imdbID: 'tt4154796' },
      { title: 'Spider-Man: No Way Home', year: '2021', imdbID: 'tt10872600' },
      { title: 'Gladiator', year: '2000', imdbID: 'tt0172495' },
      { title: 'Titanic', year: '1997', imdbID: 'tt0120338' },
      { title: 'Jurassic Park', year: '1993', imdbID: 'tt0107290' },
    ];
  
    res.json({ results: popularMovies });
  });
  

app.listen(port, () => {
    console.log(`Backend proxy listening at http://localhost:${port}`);
});