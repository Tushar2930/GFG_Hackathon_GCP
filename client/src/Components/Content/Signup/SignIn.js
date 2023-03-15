import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthorizationContext.js";
import "./SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const useAuth = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await useAuth.login(email, password).then((result) => {});
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await useAuth.SignOut().then((result) => {});
      setIsLoading(false);
    } catch (error) {
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
    }
  };

  return (
    <div className="container">
      <form>
        <label>
          Email:
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
      {<button onClick={() => handleSignIn()}>Login</button>}
      <div>--------------------------------------------------------</div>
      <div>Or</div>
      <button onClick={() => handleSignInWithGooglePopUp()}>
        signin with google
      </button>
      <button onClick={() => handleSignOut()}>signOut</button>
    </div>
  );
}
