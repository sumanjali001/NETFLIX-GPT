import MovieCard from "./MovieCard";

function MovieList({ title, nowPlayingMovies }) {
  return (
    <div className="px-6">
      <h1 className="text-xl font-bold py-4 text-white">{title}</h1>
      <div>
        <div className="flex gap-3 overflow-x-scroll scrollbar-hide ">
          {nowPlayingMovies.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
