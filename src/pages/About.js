import React, { useState, useEffect } from 'react';
import './Page.css';

const About = ({ views, onAction }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTeamMembers([
        { id: 1, name: 'Alex Johnson', role: 'Lead Developer' },
        { id: 2, name: 'Maria Garcia', role: 'UI/UX Designer' },
        { id: 3, name: 'David Chen', role: 'Project Manager' },
        { id: 4, name: 'Sarah Williams', role: 'QA Engineer' }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <h2>About Our Company</h2>
        <p className="page-description">
          We are a passionate team dedicated to creating amazing web experiences.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">{views}</span>
          <span className="stat-label">About Views</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">4</span>
          <span className="stat-label">Team Members</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">50+</span>
          <span className="stat-label">Projects</span>
        </div>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>📜 Our Mission</h3>
          <p>To deliver exceptional digital solutions that drive business growth and enhance user experiences.</p>
        </div>
        <div className="card">
          <h3>🎯 Our Vision</h3>
          <p>To be the leading provider of innovative web solutions in the digital transformation space.</p>
        </div>
      </div>

      <h3>Meet Our Team</h3>
      {loading ? (
        <p>Loading team members...</p>
      ) : (
        <div className="content-grid" style={{ marginTop: '20px' }}>
          {teamMembers.map(member => (
            <div key={member.id} className="card">
              <h3>👤 {member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      )}

      <button className="action-button" onClick={onAction}>
        Contact Our Team
      </button>
    </div>
  );
};

export default About;