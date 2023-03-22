import { useState, useContext, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Content/context/AuthorizationContext";
import { getUser } from "../api/getUser";
import "./user_profile.css";

export default function User_profile() {
  const [data, setData] = useState({
    userName: "loading",
    email: "loading",
    phone: "loading",
    address: "loading",
  });
  const [isLoading, setIsLoading] = useState(false);

  const useAuth = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      if (useAuth.currentUser) {
        try {
          setIsLoading(true);
          const result = await getUser(useAuth.currentUser.email).then(
            (result) => {
              setData({ ...result.data });
              setIsLoading(false);
            }
          );
        } catch (error) {
          setIsLoading(false);
          console.log(error.message);
        }
      }
    }
    fetchData();
  }, []);

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

  const url =
    "data:image/jpeg;base64,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";

  if (isLoading) {
    return <CircularProgress />;
  }
  if (!useAuth.currentUser) {
    return <Navigate to={"/signin"} />;
  }

  return (
    <div className="proot">
      <header>
        <h1>User Profile Details</h1>
      </header>
      <main>
        <div class="profile">
          <div>
            <img src={url} alt="User photo" />
          </div>
          <div className="infor">
            <p>Name:{data?.userName}</p>
            <p>Gender : Male</p>
            <p>Email:{data?.email}</p>
            <p>Mobile Number : 9986612616</p>
            <p>Address: 123 Main St, Anytown USA</p>
          </div>
        </div>
        <button disabled={isLoading} onClick={() => handleSignOut()}>
          {!isLoading ? "signOut" : <CircularProgress />}
        </button>
      </main>
    </div>
  );
}
