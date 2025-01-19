import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Chorus", releaseDate: "2020" },
    { id: 2, title: "Substance", releaseDate: "2020" },
    { id: 3, title: "Qwiggly", releaseDate: "2020" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Go
        </button>
      </form>

      <h3 className="page_title">Home</h3>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
