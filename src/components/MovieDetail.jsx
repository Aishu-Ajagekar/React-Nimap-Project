import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCast, IMAGE_BASE_URL } from '../api';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
    getMovieCast(id).then(data => setCast(data.cast));
  }, [id]);

  if (!movie) {
    return (
      <div className="container my-5 text-center">
        <p className="text-light">Loading movie details...</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="bg-dark text-white rounded p-4 shadow">
        <div className="row gy-4 flex-column flex-md-row align-items-start">
          {/* Movie Poster */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <img
              src={IMAGE_BASE_URL + movie.poster_path}
              alt={movie.title}
              className="img-fluid rounded shadow w-100"
            />
          </div>

          {/* Movie Info */}
          <div className="col-12 col-md-8">
            <h2 className="mb-3">{movie.title}</h2>
            <p>
              <strong>Rating:</strong>{' '}
              <span className="badge bg-warning text-dark fs-6">
                ⭐ {movie.vote_average} / 10
              </span>
            </p>
            <p><strong>Runtime:</strong> {movie.runtime} min</p>
            <p>
              <strong>Genres:</strong>{' '}
              {movie.genres && movie.genres.length > 0
                ? movie.genres.map(g => g.name).join(', ')
                : 'N/A'}
            </p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <div className="mt-3">
              <h5>Overview</h5>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <div className="mt-5">
        <h4 className="mb-3 text-white">Cast</h4>
        <div className="d-flex overflow-auto gap-3 pb-2">
          {cast.slice(0, 20).map(actor => (
            <div
              key={actor.cast_id}
              className="flex-shrink-0 text-center text-white"
              style={{ width: '120px' }}
            >
              <img
                src={
                  actor.profile_path
                    ? IMAGE_BASE_URL + actor.profile_path
                    : 'https://via.placeholder.com/150x225?text=No+Image'
                }
                alt={actor.name}
                className="img-fluid rounded shadow-sm mb-2"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <small className="fw-bold d-block">{actor.name}</small>
              <small className="text-muted d-block">as {actor.character}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
