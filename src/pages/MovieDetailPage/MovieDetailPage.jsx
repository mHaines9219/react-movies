import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../data";

export default function MovieDetailPage() {
  let { movieName } = useParams();

  const movie = movies.find((movie) => movie.title === movieName);
  if (!movie) {
    return <div>Movie Not Found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <img src={movie.posterPath} alt={`${movie.title} Poster`} />
      <p>Cast: {movie.cast.join(", ")}</p>
    </div>
  );
}
