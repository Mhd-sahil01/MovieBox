import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/MovieContext';
import '../css/Favourite.css'

function Favourite() {
    const { favourite } = useMovieContext();

    if (!favourite || favourite.length === 0) {
        return (
            <div className="no-favourite">
                <h2>No favourite movies</h2>
                <p>Add movies to favourite to appear here</p>
            </div>

        )

    } else {
        return (
            <div>
                <div className="fav-header">
                    <h2>Your Favourite :</h2>
                </div>
                <div className="movie-grid">
                    {favourite.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            </div>
        )
    }

}

export default Favourite;