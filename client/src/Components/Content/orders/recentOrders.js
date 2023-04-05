import React, { useContext, useEffect ,useState} from "react";
import { getUser } from "../../api/getUser";
import "./recentOrders.css";
import { AuthContext } from "../context/AuthorizationContext";

function RecentOrdersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const orders = [
    {
      id: 1,
      time: "2023-03-24 10:30 AM",
      items: ["Item A", "Item B"],
      total: 50.0,
    },
    {
      id: 2,
      time: "2023-03-23 3:45 PM",
      items: ["Item C", "Item D", "Item E"],
      total: 75.0,
    },
    { id: 3, time: "2023-03-22 9:15 AM", items: ["Item F"], total: 10.0 },
  ];

  const useAuth = useContext(AuthContext);
const [data,setData]=useState([]);
useEffect(() => {
  async function fet() {
    
      const resp=await fetch("http://localhost:8000/order/getOrders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email:useAuth.currentUser.email
        }),
      });
      // console.log(email);  
      const data1=await resp.json();
      setData(data1.data)
      // console.log(data1);
    }
    if(useAuth.currentUser.email)
    {fet();}
  }, [useAuth.currentUser.email]);
// console.log(useAuth.currentUser.email)
  useEffect(() => {
    const fetch = async () => {
      try {
        await getUser(useAuth.currentUserDetails._id);
      } catch (error) {
        console.log(error.message);
      }

    };
    fetch();
  }, []);

  // console.log(data);
  if(data.length>0){
  return (
    <div className="orders-container temp-cont" >
      <h1>Recent Orders</h1>
      <div className="orders ">
        {data.map((order) => (
          <div className="order" key={order.id}>
            <h3>{order.name}</h3>
            <h5>Order id: #{order.id}</h5>
            <h4>Order Date : {order.orderDate}</h4>
            <h4>Quantity : {order.quantity}</h4>
            <h4>Total : {order.quantity * order.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
else{
  return(
    <div className="orders-container">
      <h1>No Orders Placed</h1>
    </div>
  )
}
}

export default RecentOrdersPage;
