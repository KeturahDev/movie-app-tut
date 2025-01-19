import React from "react";

const MovieCard = ({ movie }) => {
  const onFaveClick = () => {
    alert("clicked");
  };

  return (
    <div className="movie-card">
      <div className="movie-post">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="fave-btn" onClick={() => onFaveClick}>
            heart
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
