// src/pages/MovieDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCast, IMAGE_BASE_URL } from '../api';
import CastList from '../components/CastList';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieDetails(id).then(data => setMovie(data));
    getMovieCast(id).then(data => setCast(data.cast));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <div className="movie-header">
        <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </div>

      <h3>Cast</h3>
      <CastList cast={cast.slice(0, 10)} /> {/* Show only top 10 cast */}
    </div>
  );
};

export default MovieDetail;
