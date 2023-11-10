import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieListPage({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.title}`} key={movie.title}>
          <MovieCard
            moviePoster={movie.posterPath}
            movieTitle={movie.title}
            movieReleaseDate={movie.releaseDate}
          />
        </Link>
      ))}
    </div>
  );
}
