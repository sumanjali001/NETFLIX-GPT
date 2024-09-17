import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { GET_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
export function usePopularMovies() {
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const dispatch = useDispatch();
  const movies = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      GET_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addPopularMovies(response.results)))

      .catch((err) => console.error(err));
  };
  useEffect(() => {
    !popularMovies && movies();
  }, []);
}
