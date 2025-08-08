// src/components/MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../api";

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-100">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={IMAGE_BASE_URL + movie.poster_path}
          className="card-img-top"
          alt={movie.title}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>

        {/* ✅ Show rating */}
        <p className="card-text">
          <i className="fas fa-star text-warning"></i>{" "}
          <strong>{movie.vote_average}</strong> / 10
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
