import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats">
        <div className="card">Total Sales: ₹2,00,000</div>
        <div className="card">Order Count: 34,763</div>
        <div className="card">Total Customers: 87,045</div>
        <div className="card">Online Orders: 12,094</div>
      </div>
      <div className="chart">
        <h3>Order and Sales Chart</h3>
        <div className="chart-placeholder">Chart Placeholder</div>
      </div>
    </div>
  );
};

export default Dashboard;
