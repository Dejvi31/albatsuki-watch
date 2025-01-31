import { Link } from "react-router-dom";

const SeriesCard = ({ series }) => {
  return (
    <div className="movie-card">
      <Link to={`/${series.title}`} state={series}>
        <img
          src={series.image ? series.image : "/no-movie.png"}
          alt={series.title}
        />
        <div className="mt-4">
          <h3>{series.title}</h3>
        </div>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{series.rating}</p>
          </div>
          <span>•</span>
          <p className="lang">{series.language}</p>
          <span>•</span>
          <p className="lang">{series.type}</p>
        </div>
      </Link>
    </div>
  );
};

export default SeriesCard;
