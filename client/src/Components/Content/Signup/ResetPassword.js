import React, { useContext, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthorizationContext.js";
import "./resetPassword.css.css";

export default function ResetPassword() {
  const useAuth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResetPasswordSuccessful, setIsResetPasswordSuccessful] =
    useState(false);

  const handleResetPassword = async () => {
    try {
      setIsLoading(true);
      await useAuth.ForgotPassword(email).then((result) => {
        setIsLoading(false);
        console.log(result);
      });
      setIsResetPasswordSuccessful(true);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  if (isResetPasswordSuccessful) {
    return (
      <div className="container">
        <h1> Password Reset Link Send in Mail </h1>
        <a href="/signin">
          <button>Go to Sign In Page</button>
        </a>
      </div>
    );
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
      </form>
      <button onClick={() => handleResetPassword()}>
        {!isLoading ? "Reset Pasword" : <CircularProgress />}
      </button>
      <div>
        Go to <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
}
