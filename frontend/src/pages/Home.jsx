import { useState } from "react";
import MovieCard from "../components/MovieCard"

function Home() {
    let [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "kissing booth", release_date: "2023" },
        { id: 2, title: "avengers", release_date: "2025" },
        { id: 3, title: "demon slayer", release_date: "2023" },
    ];

    const handleSearch = (event) => {
        event.preventDefault();
        alert(searchQuery);
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
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home;