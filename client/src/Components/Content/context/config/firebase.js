// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeQ_f3zOpkptFTCmXXgt2ve4-efXGZkYA",
  authDomain: "gfg-hackathon-42b93.firebaseapp.com",
  projectId: "gfg-hackathon-42b93",
  storageBucket: "gfg-hackathon-42b93.appspot.com",
  messagingSenderId: "133107254504",
  appId: "1:133107254504:web:3a8ec32076471da619b55d",
  measurementId: "G-N6HNY7FCM9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
