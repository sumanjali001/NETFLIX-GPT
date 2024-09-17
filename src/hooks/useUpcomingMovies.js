import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { GET_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
export function useUpcomingMovies() {
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const dispatch = useDispatch();
  const movies = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      GET_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addUpcomingMovies(response.results)))

      .catch((err) => console.error(err));
  };
  useEffect(() => {
    !upcomingMovies && movies();
  }, []);
}
