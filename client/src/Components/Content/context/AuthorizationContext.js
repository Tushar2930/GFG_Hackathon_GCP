import { auth } from "../context/config/firebase.js";
import React, { useState, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");

  function Signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function SignInWithGooglePopUp() {
    return signInWithPopup(auth, provider);
  }
  function SignOut() {
    return signOut(auth);
  }
  function ForgotPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
      return unsubscribe;
    }, []);
  });

  const value = {
    currentUser,
    setCurrentUser,
    Signup,
    SignInWithGooglePopUp,
    login,
    SignOut,
    ForgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
