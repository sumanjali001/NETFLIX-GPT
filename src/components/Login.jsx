import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState(null);
  const [signUp, setSignUp] = useState(false);

  const dispatch = useDispatch();
  function handleLogin(e) {
    e.preventDefault();
    const message = validate(email.current.value, password.current.value);
    setError(message);
    if (message) return;
    if (signUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setError(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;

          const [auth, errorMsg] = errorCode.split("/");
          setError(errorMsg);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;

          const [auth, errorMsg] = errorCode.split("/");
          setError(errorMsg);
        });
    }
  }
  return (
    <div>
      <Header />
      <div>
        <img
          src={BG_URL}
          alt="bgimage"
          className="absolute h-screen w-screen"
        />
      </div>

      <form
        className="absolute bg-black lg:w-4/12 mx-auto left-0 right-0 mt-20 p-8 md:w-5/12 sm:w-6/12"
        onSubmit={handleLogin}
      >
        <h2 className="text-xl text-white font-bold m-2">
          {signUp ? "Sign Up" : "Sign In"}
        </h2>
        {signUp && (
          <input
            type="text"
            ref={name}
            placeholder="Enter Full Name"
            className="m-2 p-3 w-full bg-gray-800 text-white"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Enter email address"
          className="m-2 p-3 w-full bg-gray-800 text-white"
        />

        <input
          type="password"
          ref={password}
          placeholder="Enter password"
          className="m-2 p-3 w-full bg-gray-800 text-white "
        />

        {error && <p className="text-red-500 mx-2 text-sm">{error}</p>}
        <button className="bg-red-500 text-white mt-5 w-full p-3 m-2 rounded-md">
          {signUp ? "Sign Up" : "Sign In"}
        </button>
        <div className="flex ">
          <p className="text-white text-sm my-2 mx-2 ">
            {signUp ? "Already user?" : "New user?"}
            <span
              className="text-white text-sm font-bold my-2  mx-2 cursor-pointer"
              onClick={() => setSignUp(!signUp)}
            >
              {signUp ? "Sign In" : "SignUp now"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
