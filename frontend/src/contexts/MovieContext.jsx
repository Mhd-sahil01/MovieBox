import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favourite, setFavourite] = useState([]);

    useEffect(()=> {
        const storedFav = localStorage.getItem("favourite");
        if(storedFav) setFavourite(JSON.parse(storedFav));
    }, []);

    useEffect(()=> {
        localStorage.setItem("favourite", JSON.stringify(favourite))
    }, [favourite]);

    const addToFav = (movie) => {
        setFavourite(prev => [...prev, movie])
    }

    const removeFromFav = (movieId) => {
      setFavourite(prev => prev.filter(movie => movie.imdbID != movieId));
    }

    const isFav = (movieId) => {
        return favourite.some(movie => movie.imdbID == movieId);
    }

    const value = {
        favourite,
        addToFav,
        removeFromFav,
        isFav
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}