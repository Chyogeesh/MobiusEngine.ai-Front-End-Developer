import React from 'react';
import '../styles/components/features.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Process complex engineering data in milliseconds with our optimized AI algorithms.'
  },
  {
    icon: '🔍',
    title: 'Precision Analysis',
    description: 'Get accurate results with our state-of-the-art machine learning models.'
  },
  {
    icon: '🔄',
    title: 'Seamless Integration',
    description: 'Easily connect with your existing tools and workflows through our API.'
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Gain deep insights with our comprehensive data visualization tools.'
  }
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Why Choose MobiusEngine.ai</h2>
        <p className="section-subtitle">
          Our platform is designed to empower engineers and data scientists with powerful AI capabilities.
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
