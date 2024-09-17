import { useGetNowPlayMovies } from "../hooks/useGetNowPlayMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import { useSelector } from "react-redux";

function Browse() {
  useGetNowPlayMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  const gptSearch = useSelector((store) => store.gpt.gptSearch);

  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}
    </div>
  );
}

export default Browse;
