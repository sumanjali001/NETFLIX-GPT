// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqDi4E_y-zF19jz5HhExeMerWHXbXMbRI",
  authDomain: "netflix-gpt-f7f09.firebaseapp.com",
  projectId: "netflix-gpt-f7f09",
  storageBucket: "netflix-gpt-f7f09.appspot.com",
  messagingSenderId: "386257144982",
  appId: "1:386257144982:web:b4b715cd258de15b7146b7",
  measurementId: "G-SH5E5EQ4CD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
