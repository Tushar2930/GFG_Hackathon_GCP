// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi1B0aqKufCk6kLuBC52S3_JKa6y8VtP8",
  authDomain: "the-tendril-380603.firebaseapp.com",
  projectId: "the-tendril-380603",
  storageBucket: "the-tendril-380603.appspot.com",
  messagingSenderId: "726281295118",
  appId: "1:726281295118:web:a5205cdddd271f90d8b35f",
  measurementId: "G-L47YSV4Z9H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
