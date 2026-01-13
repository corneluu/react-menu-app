import React, { useState, useEffect } from 'react';
import './Page.css';

const Portfolio = ({ views, onAction }) => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setProjects([
      { id: 1, title: 'E-commerce Platform', category: 'web', year: 2023 },
      { id: 2, title: 'Health Tracking App', category: 'mobile', year: 2023 },
      { id: 3, title: 'Banking Dashboard', category: 'web', year: 2022 },
      { id: 4, title: 'Food Delivery App', category: 'mobile', year: 2022 },
      { id: 5, title: 'Learning Management System', category: 'web', year: 2024 },
    ]);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="page">
      <div className="page-header">
        <h2>Our Portfolio</h2>
        <p className="page-description">
          Check out our latest projects and success stories.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">{views}</span>
          <span className="stat-label">Portfolio Views</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{projects.length}</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{new Date().getFullYear()}</span>
          <span className="stat-label">Current Year</span>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          style={filterBtnStyle(filter === 'all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
          style={filterBtnStyle(filter === 'web')}
        >
          Web Development
        </button>
        <button 
          className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
          onClick={() => setFilter('mobile')}
          style={filterBtnStyle(filter === 'mobile')}
        >
          Mobile Apps
        </button>
      </div>

      <div className="content-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="card">
            <h3>📂 {project.title}</h3>
            <p>
              <strong>Category:</strong> {project.category === 'web' ? 'Web Development' : 'Mobile App'}
            </p>
            <p><strong>Year:</strong> {project.year}</p>
            <p><strong>Status:</strong> {project.year === 2024 ? 'In Progress' : 'Completed'}</p>
          </div>
        ))}
      </div>

      <button className="action-button" onClick={onAction}>
        View Case Studies
      </button>
    </div>
  );
};

const filterBtnStyle = (isActive) => ({
  background: isActive ? 'linear-gradient(45deg, #667eea, #764ba2)' : '#f0f0f0',
  color: isActive ? 'white' : '#333',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '20px',
  marginRight: '10px',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'all 0.3s ease'
});

export default Portfolio;