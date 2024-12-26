import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CodeAnt AI</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>AI Code Review</li>
        <li>Cloud Security</li>
      </ul>
      <div className="hamburger-menu">☰</div>
    </nav>
  );
};
export default Navbar;
