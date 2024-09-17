import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
