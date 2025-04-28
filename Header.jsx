import React from 'react';
import '../styles/components/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">ME</span>
          <span className="logo-text">MobiusEngine.ai</span>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn btn-outline">Sign In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
