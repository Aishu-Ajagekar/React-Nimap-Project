
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../api';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPopularMovies(page).then(data => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    }).finally(()=>setLoading(false));
  }, [page]);

  return (
    <div className="container mt-4">
      <h2>Popular Movies</h2>
      {isLoading ? (
      <div className="text-center my-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      <>
        <MovieList movies={movies} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </>
    )}
    </div>
  );
};

export default Home;
