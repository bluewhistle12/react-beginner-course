import React from "react";

const MovieCard = ({movieInfo}) => {
  return (
    <div className="movie">
      <div>
        <p>{movieInfo.Year}</p>
      </div>

      <div>
        <img src={movieInfo.Poster !== 'N/A' ? movieInfo.Poster : 'https://via.placeholder.com/400'} alt={movieInfo.Title} className="poster" />
      </div>

      <div>
        <span>{movieInfo.Type}</span>
        <h3>{movieInfo.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;