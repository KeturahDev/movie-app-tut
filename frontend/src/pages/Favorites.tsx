import React from "react";
import "../styles/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();
  return (
    <div>
      {!favorites ? (
        <div className="faves-empty">
          <h2>No Favorites yet</h2>
          <p>Start favoriting and it will appear here</p>
        </div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
