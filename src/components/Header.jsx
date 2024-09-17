import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setGptSearch } from "../utils/gptSlice";

import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeConfig } from "../utils/configSlice";
import { FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const ShowGptSearch = useSelector((store) => store.gpt.gptSearch);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  function handleSignout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="absolute w-screen px-3 md:px-8 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        src={LOGO}
        alt="headerimage"
        className=" w-40 md:w-44 mx-auto md:mx-0"
      />

      {user && (
        <div className="flex md:p-2 justify-end md:justify-between">
          {ShowGptSearch && (
            <select
              className="m-2 p-2 bg-gray-900 text-white "
              onChange={(e) => dispatch(changeConfig(e.target.value))}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-500 p-2  h-10 text-white m-4 rounded-lg flex "
            onClick={() => dispatch(setGptSearch())}
          >
            <span className="p-1">
              {!ShowGptSearch ? <FaSearch /> : <AiFillHome />}
            </span>

            {!ShowGptSearch ? "Search" : "Home"}
          </button>
          <img
            className=" hidden md:block w-12 h-12 my-3 "
            alt="usericon"
            src={user?.photoURL}
          />

          <button
            className="text-white bg-red-600 h-10  m-4 p-2 rounded-md font-bold text-md"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
