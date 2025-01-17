import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="container">
      <nav className="nav">
        <h1 className="logo">Newari Food</h1>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Menu</a>
          <a href="#" className="nav-link">Delivery</a>
          <a href="#" className="nav-link">About Us</a>
        </div>
        <div className="auth-links">
          <a href="#" className="auth-link">Login</a>
          <a href="#" className="auth-link">Signup</a>
        </div>
      </nav>
      <div className="hero">
        <h2 className="hero-title">Discover the Best Newari Cuisine</h2>
        <p className="hero-description">Experience authentic sushi and other delicacies.</p>
        <button className="hero-button">Explore Menu</button>
      </div>
    </div>
  );
};

export default Landing;