import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../styles/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);
  searchMovies;
  getPopularMovies;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    if (loading) return;
    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      setError("Failed to search for movies");
      console.log(err);
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };
  console.log("hey");
  console.log(movies);

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
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="movies-grid">
          {movies ? (
            movies.map(
              (movie) =>
                movie.title.toLowerCase().startsWith(searchQuery) && (
                  <MovieCard key={movie.id} movie={movie} />
                )
            )
          ) : (
            <p>No movies found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
