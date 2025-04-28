import React from 'react';
import '../styles/components/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Build the Future with AI-Powered Engineering</h1>
          <p className="subtitle">
            MobiusEngine.ai provides cutting-edge AI solutions to transform your engineering workflows and accelerate innovation.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Start Free Trial</button>
            <button className="btn btn-outline">See Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            {/* In a real project, replace with actual image */}
            <span>Hero Illustration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
