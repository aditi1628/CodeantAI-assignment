import React, { useState } from "react";
import "../styles/Sidebar.css";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(false)}>Close</button>
        <div className="user-profile">User Profile</div>
        <ul>
          <li>Repositories</li>
          <li>AI Code Reviews</li>
          <li>Cloud Security</li>
        </ul>
      </div>
      <button className="hamburger" onClick={() => setIsOpen(true)}>
        ☰
      </button>
    </>
  );
};
export default Sidebar;
