import { useState, useContext, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Content/context/AuthorizationContext";
import { getUser } from "../api/getUser";
import "./user_profile.css";

export default function User_profile() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const useAuth = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      if (useAuth.currentUser) {
        try {
          setIsLoading(true);
          await getUser(useAuth?.currentUser?.email).then((result) => {
            setData({ ...result.data });
            console.log(result)
            setIsLoading(false);
          });
        } catch (error) {
          setIsLoading(false);
          console.log(error.message);
        }
      }
    }
    fetchData();
  }, [useAuth.currentUser]);

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
            <img src={data?.ip} alt="User photo" />
          </div>
          <div className="infor">
            <p>Name:{data?.userName}</p>
            <p>Gender : {data?.gender}</p>
            <p>Email:{data?.email}</p>
            <p>Mobile Number : {data?.Mnumber}</p>
            <p>Account Number : {data?.accountNo}</p>
            <p>Address: {data?.address}</p>
          </div>
        </div>
        <button disabled={isLoading} onClick={() => handleSignOut()}>
          {!isLoading ? "signOut" : <CircularProgress />}
        </button>
      </main>
    </div>
  );
}
