import React, { useState, useEffect } from 'react';
import './Page.css';

const Home = ({ views, onAction }) => {
  const [counter, setCounter] = useState(0);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning!');
    else if (hour < 18) setGreeting('Good Afternoon!');
    else setGreeting('Good Evening!');

    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <h2>{greeting} Welcome to Our Platform</h2>
        <p className="page-description">
          Discover amazing features and services tailored for your needs.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">{views}</span>
          <span className="stat-label">Page Views</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{counter}</span>
          <span className="stat-label">Seconds Active</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">5</span>
          <span className="stat-label">Total Pages</span>
        </div>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>🚀 Fast & Responsive</h3>
          <p>Built with modern React hooks for optimal performance and user experience.</p>
        </div>
        <div className="card">
          <h3>🎨 Beautiful UI</h3>
          <p>Styled with custom CSS featuring gradients, animations, and responsive design.</p>
        </div>
        <div className="card">
          <h3>⚡ React Hooks</h3>
          <p>Demonstrating useState, useEffect, and custom hooks implementation.</p>
        </div>
      </div>

      <button className="action-button" onClick={onAction}>
        Explore Features
      </button>
    </div>
  );
};

export default Home;