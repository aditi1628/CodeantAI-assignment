import React from "react";
import "../styles/RepositoryList.css";

const repositories = [
  { name: "Repo 1", type: "Public", size: "1 MB", updated: "2 days ago" },
  { name: "Repo 2", type: "Private", size: "3 MB", updated: "1 week ago" },
];

const RepositoryList = () => {
  return (
    <div className="repo-list">
      {repositories.map((repo, index) => (
        <div className="repo-card" key={index}>
          <h3>{repo.name}</h3>
          <p>{repo.type}</p>
          <p>{repo.size}</p>
          <p>{repo.updated}</p>
        </div>
      ))}
    </div>
  );
};

export default RepositoryList;
