import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import axios from "axios";
import "../css/Home.css";

function Home() {
    let [searchQuery, setSearchQuery] = useState("");
    let [movies, setMovies] = useState([]);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovie = await axios.get("http://localhost:8000/api/popular");
                console.log(popularMovie.data);
                setMovies(popularMovie.data.results);
            } catch (err) {
                console.log(err);
                setError("Failed to load the movies");
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = async (event) => {
        event.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return

        setLoading(true)
        try {
            const searchMovie = await axios.get(`http://localhost:8000/api/search?query=${encodeURIComponent(searchQuery)}`);
            console.log(searchMovie);
            setMovies(searchMovie.data.Search);
            setError(null);
        } catch (error) {
            console.log(error);
            setError("Failed To Search Movie")
        } finally {
            setLoading(false)
        }

        setSearchQuery("");
    };

    const handleInput = (event) => {
        setSearchQuery(event.target.value);
    }
    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={handleInput} />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">Loading...</div>
                : (
                    <div className="movie-grid">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.imdbID} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Home;