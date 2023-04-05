import React, { useState, useContext, useEffect } from "react";
import FileBase from "react-file-base64";

import { Link,useNavigate } from "react-router-dom";
import { createUser } from "../../api/createUser";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../context/AuthorizationContext.js";
import SelectOption from "./SelectOption";

import "./Signup.css";

function Signup() {
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({});
  const useAuth = useContext(AuthContext);

  const handleEntryChanges = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleProfileChanges = (e) => {
    var profiledata = [];
    e.map((e) => {
      profiledata.push(e.value);
    });
    setForm({ ...form, profiledata });
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

  const handelSignUp = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      form.password === confirmPassword
        ? await useAuth.Signup(form.email, form.password).then((result) => {
            createUser(form);
            setIsLoading(false);
          })
        : alert("Password and confirm password does not matched");
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const navigate = useNavigate();
useEffect(() => {
  if (useAuth.currentUser) {
    return (navigate("/userProfile"));
  }
}, [useAuth.currentUser]);

  return (
    // <div className="container">
    //   <form onSubmit={handelSignUp}>
    //     <SelectOption handleProfileChanges={handleProfileChanges} />
    //     <label>
    //       Email:
    //       <input
    //         name="email"
    //         required
    //         type="email"
    //         value={form.email}
    //         onChange={(e) => handleEntryChanges(e)}
    //       />
    //     </label>
    //     <label>
    //       Password:
    //       <input
    //         name="password"
    //         required
    //         type="password"
    //         value={form.password}
    //         onChange={(e) => handleEntryChanges(e)}
    //       />
    //     </label>
    //     <label>
    //       Confirm Password:
    //       <input
    //         name="confirmPassword"
    //         required
    //         type="password"
    //         value={confirmPassword}
    //         onChange={(e) => setconfirmPassword(e.target.value)}
    //       />
    //     </label>
    //     <label>
    //       Name:
    //       <input
    //         name="userName"
    //         required
    //         type="text"
    //         value={form.userName}
    //         onChange={(e) => handleEntryChanges(e)}
    //       />
    //     </label>
    //     <label>
    //       Account No:
    //       <input
    //         name="accountNo"
    //         type="number"
    //         required
    //         value={form.accountNo}
    //         minLength={12}
    //         maxLength={12}
    //         onChange={(e) => handleEntryChanges(e)}
    //       />
    //     </label>
    //     <label>
    //       Mobile No*:
    //       <input
    //         name="Mnumber"
    //         required
    //         type="number"
    //         value={form.Mnumber}
    //         minLength="12"
    //         onChange={(e) => handleEntryChanges(e)}
    //       />
    //     </label>

    //     <label>
    //       Address :
    //       <input
    //         name="address"
    //         required
    //         type="text"
    //         value={form.address}
    //         minLength="12"
    //         onChange={(e) => handleEntryChanges(e)}
    //       />
    //     </label>
    //     <fieldset>
    //       <legend>Select a Gender:</legend>
    //       <label>
    //         {" "}
    //         Male:{" "}
    //         <input
    //           type="radio"
    //           onFocus={(e) => {
    //             setForm({ ...form, gender: e.target.value });
    //           }}
    //           name="gender"
    //           value="Male"
    //         />
    //       </label>

    //       <label>
    //         Female:{" "}
    //         <input
    //           onFocus={(e) => {
    //             setForm({ ...form, gender: e.target.value });
    //           }}
    //           type="radio"
    //           name="gender"
    //           value="Female"
    //         />
    //       </label>
    //     </fieldset>
    //     <label>
    //       Upload Profile Pic:
    //       <FileBase
    //         type="image"
    //         multiple={false}
    //         onDone={({ base64 }) => setForm({ ...form, ip: base64 })}
    //       />
    //     </label>
    //     <button disabled={isLoading} type="submit">
    //       {!isLoading ? "Login" : <CircularProgress />}
    //     </button>
    //   </form>

    //   <div>
    //     Already a user - <Link to="/signin">SignIn</Link>
    //   </div>
    // </div>
    <>
      <div className="sign-container">
        <div className="left-side">
        <div className="left-child">
        <SelectOption handleProfileChanges={handleProfileChanges} style={{marginTop:"7rem"}}/>
        {form.ip ? <img src={form.ip} className="pro-img-main"/>:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwSTvN7cBwsaA0izTzKk37pmjMrCU6pcm9Q&usqp=CAU" className="pro-img-main"/>}
        {/* <img src={form.ip} className="pro-img-main"/> */}
        <label>
        <FileBase
            type="image"
            multiple={false}
            onDone={({ base64 }) => setForm({ ...form, ip: base64 })}
          />
        </label>
        <button className="submit-btn" disabled={isLoading}
        onClick={() => handleSignInWithGooglePopUp()} style={{backgroundColor:"#23231e",color:"white"}}>Sign in with Google</button>
        </div>
        </div>
        <div className="right-side">
          <div className="right-head">Create Account</div>
          <div className="input-root">
            <div className="input-con">
              <label>Name</label>
              <input type="text" name="userName" required value={form.userName}
            onChange={(e) => handleEntryChanges(e)}/>
            </div>
            <div className="input-con">
              <label>Email address</label>
              <input type="text" name="email" required value={form.email}
            onChange={(e) => handleEntryChanges(e)}/>
            </div>
            <div className="input-con">
              <label>Password</label>
              <input type="text" name="password" required value={form.password}
            onChange={(e) => handleEntryChanges(e)}/>
            </div>
            <div className="input-con">
              <label>Confirm Password</label>
              <input type="text" name="cofirmPassword" required value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}/>
            </div>
            <div className="input-con">
              <label>Mobile No.</label>
              <input type="text" name="Mnumber" required value={form.Mnumber}
            minLength="12"
            onChange={(e) => handleEntryChanges(e)}/>
            </div>
            <div className="input-con">
              <label>Account No.</label>
              <input type="text" name="accountNo" required value={form.accountNo}
            minLength={12}
            maxLength={12}
            onChange={(e) => handleEntryChanges(e)}/>
            </div>
            <div className="input-con">
              <label>Address</label>
              <input type="text" name="address" required value={form.address}
            minLength="12"
            onChange={(e) => handleEntryChanges(e)}/>
            </div>
            <div className="radio-btn" style={{height:"5%"}}>
              <div>Gender</div>
              <div className="radio-btn">
              <div className="rdbtn-temp">
                {" "}
                Male <input type="radio" name="gender" value="male" onFocus={(e) => {
                setForm({ ...form, gender: e.target.value });
              }}/>
              </div>
              <div className="rdbtn-temp">
                {" "}
                Female <input type="radio" name="gender" value="female" onFocus={(e) => {
                setForm({ ...form, gender: e.target.value });
              }}/>
              </div>
              </div>
            </div>
            <button className="submit-btn" onClick={handelSignUp}>Sign In</button>
        <Link to="/signin">
              <div>Already have an Account? Sign In</div></Link>
    
          </div>
        </div>
      </div>
    </>
  );
}



export default Signup;
