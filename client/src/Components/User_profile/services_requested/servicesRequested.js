import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Content/context/AuthorizationContext";
import Card from "./card";

export default function ServicesRequested() {
  const [data, setdata] = useState([]);
  const useAuth = useContext(AuthContext);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: useAuth.currentUser.email,
          }),
        };
        const res = await fetch(
          `http://${process.env.REACT_APP_IP}:8000/user/get-user-rent`,
          requestOptions
        );
        const data = await res.json();
        setdata(data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="w-full flex  flex-col place-items-center">
      {data.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
}
