
import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getUpcomingMovies(page).then(data => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });
  }, [page]);

  return (
    <div className="container mt-4">
      <h2>Upcoming Movies</h2>
      <MovieList movies={movies} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default Upcoming;
