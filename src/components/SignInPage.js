import React from "react";
import "../styles/SignInPage.css";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="left-section">
        <h2>AI to Detect & Autofix Bad Code</h2>
        <p>30+ Language Support</p>
        <p>10k+ Developers</p>
        <p>100k+ Hours Saved</p>
      </div>
      <div className="right-section">
        <h1>Welcome to CodeAnt AI</h1>
        <button>SAAS</button>
        <button>Self Hosted</button>
        <div className="login-options">
          <button>Sign in with Github</button>
          <button>Sign in with Bitbucket</button>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
