import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";

function GptSearch() {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="bg-image"
          className="h-screen object-cover w-screen blur-sm"
        />
      </div>
      <GptSearchbar />
    </>
  );
}

export default GptSearch;
