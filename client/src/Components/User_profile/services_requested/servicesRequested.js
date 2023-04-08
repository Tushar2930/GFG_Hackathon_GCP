import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Content/context/AuthorizationContext";

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
          "http://localhost:8000/user/get-user-service_requests",
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
    <div>
      {data.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
