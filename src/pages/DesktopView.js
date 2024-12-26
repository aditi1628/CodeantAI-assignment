import React from "react";
import Navbar from "../components/Navbar";
import RepositoryList from "../components/RepositoryList";
import "../styles/DesktopView.css";

const DesktopView = () => {
  return (
    <div className="desktop-view">
      <Navbar />
      <RepositoryList />
    </div>
  );
};

export default DesktopView;
