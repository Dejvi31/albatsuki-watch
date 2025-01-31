import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/${movie.title}`} state={movie}>
        <img
          src={movie.image ? movie.image : "/no-movie.png"}
          alt={movie.title}
        />

        <div className="mt-4">
          <h3>{movie.title}</h3>
        </div>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{movie.rating}</p>
          </div>
          <span>•</span>
          <p className="lang">{movie.language}</p>
          <span>•</span>
          <p className="lang">{movie.type}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
