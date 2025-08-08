import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../api';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      searchMovies(query, page).then(data => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      });
    }
  }, [query, page]);

  return (
    <div className="container mt-4">
      <h2>Search Results for "{query}"</h2>
      <MovieList movies={movies} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default Search;
