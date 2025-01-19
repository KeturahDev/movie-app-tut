import React from "react";
import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  const onFaveClick = () => {
    alert("clicked");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="fave-btn" onClick={() => onFaveClick}>
            heart
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
