import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { GET_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
export function useGetNowPlayMovies() {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const movies = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      GET_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addNowPlayingMovies(response.results)))

      .catch((err) => console.error(err));
  };
  useEffect(() => {
    !nowPlayingMovies && movies();
  }, []);
}
