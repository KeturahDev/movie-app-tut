import React from "react";
import "../styles/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { isFavorited, addToFavorites, removeFavorite } = useMovieContext();
  const favorited = isFavorited(movie.id);

  const onFaveClick = (e) => {
    e.preventDefault();
    if (favorited) removeFavorite(movie.id);
    else addToFavorites(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`fave-btn ${favorited ? "active" : ""}`}
            onClick={onFaveClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-").reverse().join(" ")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
