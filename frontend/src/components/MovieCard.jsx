import '../css/MovieCard.css'

function MovieCard({movie}) {

    function onFavClick () {
        alert("clicked")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="movie-overlay">
                    <button className="fav-btn" onClick={onFavClick}>
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