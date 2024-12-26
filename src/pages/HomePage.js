import React from "react";
import Navbar from "../components/Navbar";
import RepositoryList from "../components/RepositoryList";
import StatsCard from "../components/StatsCard";
import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="stats-section">
        <StatsCard title="Repositories" value="10+" />
        <StatsCard title="Languages" value="30+" />
        <StatsCard title="Developers" value="10k+" />
      </div>
      <RepositoryList />
    </div>
  );
};

export default HomePage;
