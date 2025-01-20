import React from "react";

const Orders = () => {
  const orders = [
    { id: 1, customer: "John Doe", total: "₹5000", date: "2025-01-18" },
    { id: 2, customer: "Jane Smith", total: "₹7000", date: "2025-01-18" },
  ];

  return (
    <div className="orders">
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
