import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RepositoryList from "./components/RepositoryList";
import SignInPage from "./components/SignInPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/repositories" element={<RepositoryList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
