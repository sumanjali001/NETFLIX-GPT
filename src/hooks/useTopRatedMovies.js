import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { GET_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
export function useTopRatedMovies() {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const dispatch = useDispatch();
  const movies = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      GET_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addTopRatedMovies(response.results)))

      .catch((err) => console.error(err));
  };
  useEffect(() => {
    !topRatedMovies && movies();
  }, []);
}
