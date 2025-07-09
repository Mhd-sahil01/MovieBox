import { useMovieContext } from '../contexts/MovieContext';
import '../css/MovieCard.css'

function MovieCard({ movie }) {
    const { isFav, addToFav, removeFromFav } = useMovieContext();

    const favourite = isFav(movie.imdbID);

    function onFavClick(event) {
        event.preventDefault();
        if(favourite) removeFromFav(movie.imdbID);
        else addToFav(movie);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="movie-overlay">
                    <button className={`fav-btn ${favourite ? "active" : ""} `} onClick={onFavClick}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </div>
    )
}

export default MovieCard;