import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/MovieContext';
import '../css/Favourite.css'

function Favourite() {
    const { favourite } = useMovieContext();

    if (!favourite) {
        return (
            <div>
                <h2>No favourite movies</h2>
                <p>Add movies to favourite to apper here</p>
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