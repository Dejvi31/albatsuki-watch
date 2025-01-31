import { useLocation } from "react-router-dom";
import MovieDetails from "../movies/MovieDetails";
import SeriesDetails from "../series/SeriesDetails";

const CardDetails = () => {
  const location = useLocation();
  const { state } = location;
  const item = state;

  if (!item) {
    return <p className="text-center text-red-500">Item not found</p>;
  }

  const isMovie = item.id.startsWith("m-");
  const isSeries = item.id.startsWith("s-");

  if (isMovie) {
    return <MovieDetails item={item} />;
  } else if (isSeries) {
    return <SeriesDetails item={item} />;
  } else {
    return <p className="text-center text-red-500">Invalid item type</p>;
  }
};

export default CardDetails;
