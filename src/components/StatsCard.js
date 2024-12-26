import React from "react";
import "./styles/StatsCard.css";

const StatsCard = ({ title, value }) => {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      <h3>{value}</h3>
    </div>
  );
};

export default StatsCard;
