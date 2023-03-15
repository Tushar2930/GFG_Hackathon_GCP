import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthorizationContext.js";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [profession, setProfession] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const useAuth = useContext(AuthContext);

  const handelSignUp = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      await useAuth.Signup(email, password).then((result) => {});

      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="container">
        <h1> You Are Loggedin!</h1>
        <a href="/">
          <button>Home</button>
        </a>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>SignUp as {profession}</h1>
      {!profession && (
        <>
          <div>Select ur User Profile</div>
          <button value="Farmer" onClick={(e) => setProfession(e.target.value)}>
            Farmer
          </button>
          <button value="Buyer" onClick={(e) => setProfession(e.target.value)}>
            Buyer
          </button>
          <button
            value="  Big Company"
            onClick={(e) => {
              setProfession(e.target.value);
            }}>
            Big Company
          </button>
        </>
      )}
      {profession.length !== 0 && (
        <form onSubmit={handelSignUp}>
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
          <label>
            Confirm Password:
            <input
              required
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <label>
            Name:
            <input
              required
              type="text"
              value={userName}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Account No:
            <input
              type="number"
              required
              value={accountNo}
              minLength={12}
              maxLength={12}
              onChange={(e) => setAccountNo(e.target.value)}
            />
          </label>
          <label>
            Aadhar No:
            <input
              required
              type="number"
              value={aadharNo}
              minLength="12"
              onChange={(e) => setAadharNo(e.target.value)}
            />
          </label>
          {!isLoading && <button type="submit">Login</button>}
        </form>
      )}
      <div>
        Already a user<Link to="/signin">SignIn</Link>
      </div>
    </div>
  );
}

export default Signup;
