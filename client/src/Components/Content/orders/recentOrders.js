import React from "react";
import "./recentOrders.css";

function RecentOrdersPage() {
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

  return (
    <div className="orders-container">
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <div className="order-header">
            <div className="order-id">Order #{order.id}</div>
            <div className="order-time">{order.time}</div>
          </div>
          <div className="order-items">
            {order.items.map((item) => (
              <div key={item} className="order-item">
                {item}
              </div>
            ))}
          </div>
          <div className="order-total">Total: ${order.total.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}

export default RecentOrdersPage;
