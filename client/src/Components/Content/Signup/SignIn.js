import React, { useContext, useState } from "react";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../context/AuthorizationContext.js";
import { Link, Navigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const useAuth = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await useAuth.login(email, password).then((result) => {
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  const handleSignInWithGooglePopUp = async () => {
    try {
      setIsLoading(true);
      await useAuth.SignInWithGooglePopUp().then((result) => {
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  if (useAuth.currentUser) {
    return <Navigate to={"/userProfile"} />;
  }

  return (
    <div className="container">
      <form>
        <label>
          Email*:
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password*:
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
      <a href="/signin/resetpassword">Forgot Password ?</a>
      <button disabled={isLoading} onClick={() => handleSignIn()}>
        {!isLoading ? "Login" : <CircularProgress />}
      </button>
      <div>--------------------------------------------------------</div>
      <div>Or</div>
      <button
        disabled={isLoading}
        onClick={() => handleSignInWithGooglePopUp()}>
        {!isLoading ? "signin with google" : <CircularProgress />}
      </button>

      <div>
        New user<Link to="/signup"> Sign Up </Link>
      </div>
    </div>
  );
}
