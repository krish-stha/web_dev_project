import React from "react";

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search for products, reports" />
      <div className="icons">
        <span className="bell-icon">🔔</span>
        <span className="profile-icon">👤</span>
      </div>
    </div>
  );
};

export default Header;
