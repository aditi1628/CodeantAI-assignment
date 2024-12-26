import React from "react";
import "./styles/MobileMenu.css";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleMenu}>
        x
      </button>
      <ul className="menu-links">
        <li>Home</li>
        <li>AI Code Review</li>
        <li>Cloud Security</li>
        <li>Repositories</li>
      </ul>
    </div>
  );
};
export default MobileMenu;
