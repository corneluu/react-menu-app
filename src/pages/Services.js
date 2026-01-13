import React, { useState, useEffect } from 'react';
import './Page.css';

const Services = ({ views, onAction }) => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setServices([
      {
        id: 1,
        title: 'Web Development',
        description: 'Custom web applications using React, Node.js, and modern frameworks.',
        price: '$5,000+',
        features: ['Responsive Design', 'SEO Optimized', 'Scalable Architecture']
      },
      {
        id: 2,
        title: 'Mobile Apps',
        description: 'Cross-platform mobile applications for iOS and Android.',
        price: '$10,000+',
        features: ['React Native', 'Native Performance', 'App Store Deployment']
      },
      {
        id: 3,
        title: 'UI/UX Design',
        description: 'Beautiful and intuitive user interfaces that enhance user experience.',
        price: '$3,000+',
        features: ['Wireframing', 'Prototyping', 'User Testing']
      }
    ]);
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <h2>Our Services</h2>
        <p className="page-description">
          Professional solutions tailored to your business needs.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">{views}</span>
          <span className="stat-label">Service Views</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{services.length}</span>
          <span className="stat-label">Services</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">100%</span>
          <span className="stat-label">Satisfaction</span>
        </div>
      </div>

      <div className="content-grid">
        {services.map(service => (
          <div 
            key={service.id} 
            className={`card ${selectedService === service.id ? 'active' : ''}`}
            onClick={() => setSelectedService(service.id)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div style={{ marginTop: '15px' }}>
              <strong>Price: {service.price}</strong>
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="action-button" 
        onClick={() => {
          onAction();
          alert('Service inquiry sent!');
        }}
      >
        Request Quote
      </button>
    </div>
  );
};

export default Services;