import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef } from "react";
import OpenAI from "openai";
import { OPENAI_KEY } from "../utils/constants";
import { FaSearch } from "react-icons/fa";
import MovieList from "./MovieList";
import { useState } from "react";
function GptSearchbar() {
  const [finalMovie, setFinalMovie] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const movies = useSelector((store) => store.movies);
  const allMovies = [
    ...movies?.nowPlayingMovies,
    ...movies?.popularMovies,
    ...movies?.topRatedMovies,
    ...movies?.upcomingMovies,
  ];

  function handleSearch() {
    if (search) {
      const searchMovie = allMovies
        .filter((movie) =>
          movie.original_title.toLowerCase().includes(search.toLowerCase())
        )
        .filter(
          (obj, index, self) =>
            index === self.findIndex((el) => el.id === obj.id)
        );
      console.log(searchMovie);

      setFinalMovie(searchMovie);
      setError("");
    } else {
      setError("Pls enter text to search...");
    }
  }

  return (
    <div>
      <div className="md:pt-[15%] pt-[38%]  flex justify-center">
        <form
          className=" bg-black w-5/6 md:w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            ref={searchText}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="bg-white p-2 m-3 col-span-8 md:col-span-9"
          />

          <button
            className="bg-red-500 text-white rounded-lg col-span-4 md:col-span-3 p-2 m-3"
            onClick={handleSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
      <div className=" flex ">
        {finalMovie &&
          (finalMovie.length !== 0 ? (
            <MovieList title={"search"} nowPlayingMovies={finalMovie} />
          ) : (
            <h1 className="text-red-600 m-3  font-bold text-xl flex text-center mx-auto p-2">
              No Results Found...
            </h1>
          ))}

        {error && (
          <h1 className="text-red-600 font-bold font-xl flex text-center mx-auto p-2">
            {error}
          </h1>
        )}
      </div>
    </div>
  );
}

export default GptSearchbar;
