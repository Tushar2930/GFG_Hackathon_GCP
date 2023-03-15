import React, { useContext, useState } from "react";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../context/AuthorizationContext.js";
import { Link } from "react-router-dom";
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
  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await useAuth.SignOut().then((result) => {
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
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
      <button onClick={() => handleSignIn()}>
        {!isLoading ? "Login" : <CircularProgress />}
      </button>
      <div>--------------------------------------------------------</div>
      <div>Or</div>
      <button onClick={() => handleSignInWithGooglePopUp()}>
        signin with google
      </button>
      <button onClick={() => handleSignOut()}>signOut</button>
      <div>
        New user<Link to="/signup"> Sign Up </Link>
      </div>
    </div>
  );
}
