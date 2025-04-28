import React from 'react';
import '../styles/components/cta.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Transform Your Engineering Process?</h2>
        <p>
          Join thousands of engineers who are already building the future with MobiusEngine.ai
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Get Started for Free</button>
          <button className="btn btn-outline">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
