import React from "react";
import MobileMenu from "../components/MobileMenu";
import RepositoryList from "../components/RepositoryList";
import "./styles/MobileView.css";

const MobileView = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="mobile-view">
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <RepositoryList />
    </div>
  );
};

export default MobileView;
