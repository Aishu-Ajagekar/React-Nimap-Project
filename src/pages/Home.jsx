// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../api';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getPopularMovies(page).then(data => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });
  }, [page]);

  return (
    <div className="container mt-4">
      <h2>Popular Movies</h2>
      <MovieList movies={movies} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default Home;
