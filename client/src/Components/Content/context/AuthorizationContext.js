import { auth } from "../context/config/firebase.js";
import React, { useState, createContext, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");

  function Signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      return unsubscribe;
    }, []);
  });

  const value = {
    currentUser,
    Signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
