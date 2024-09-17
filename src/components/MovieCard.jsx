import { IMAGE_URL } from "../utils/constants";

function MovieCard({ posterPath }) {
  return <img src={IMAGE_URL + posterPath} className="w-40 h-48" />;
}

export default MovieCard;
