import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function Secondarycontainer() {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black ">
        <div className=" mt-0 pl-4 md:pl-12 relative md:-mt-20 lg:-mt-36 z-10">
          <MovieList
            title={"Now Playing Movies"}
            nowPlayingMovies={movies?.nowPlayingMovies}
          />
          {movies.popularMovies && (
            <MovieList
              title={"Popular Movies"}
              nowPlayingMovies={movies?.popularMovies}
            />
          )}
          {movies.topRatedMovies && (
            <MovieList
              title={"Top Rated Movies"}
              nowPlayingMovies={movies?.topRatedMovies}
            />
          )}
          {movies.upcomingMovies && (
            <MovieList
              title={"Upcoming Movies"}
              nowPlayingMovies={movies?.upcomingMovies}
            />
          )}
        </div>
      </div>
    )
  );
}

export default Secondarycontainer;
