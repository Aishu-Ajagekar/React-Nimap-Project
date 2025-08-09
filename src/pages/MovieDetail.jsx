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
      <div
        className="movie-hero"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL + (movie.backdrop_path || movie.poster_path)})`,
        }}
      >
        <div className="movie-hero-overlay">
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
          </div>
        </div>
      </div>

      <div className="cast-section">
        <h3>Cast ({cast?.length})</h3>
        <CastList cast={cast} />
      </div>
    </div>
  );
};

export default MovieDetail;
