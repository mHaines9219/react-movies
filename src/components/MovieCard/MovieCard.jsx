import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({
  moviePoster,
  movieTitle,
  movieReleaseDate,
}) {
  // Style object for the movie card background
  const style = {
    backgroundImage: `url(${moviePoster})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div id="movie-card" style={style}>
      <h3 id="movie-title">{movieTitle}</h3>
      <p id="movie-release-date">{movieReleaseDate}</p>
    </div>
  );
}
