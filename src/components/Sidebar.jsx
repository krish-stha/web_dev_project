import React from "react";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li onClick={() => setActiveSection("Dashboard")}>Overview</li>
        <li onClick={() => setActiveSection("Orders")}>Orders</li>
        <li onClick={() => setActiveSection("Customers")}>Customers</li>
        <li onClick={() => setActiveSection("Menu")}>Menu</li>
      </ul>
    </div>
  );
};

export default Sidebar;
