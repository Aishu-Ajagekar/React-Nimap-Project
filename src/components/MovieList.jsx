// src/components/MovieList.jsx
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
      {movies.map((movie) => (
        <div className="col" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
