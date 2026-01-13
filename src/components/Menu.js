import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: 'ℹ️' },
    { 
      id: 'services', 
      label: 'Services', 
      icon: '⚙️',
      submenu: ['Web Dev', 'Mobile Apps', 'Consulting']
    },
    { id: 'portfolio', label: 'Portfolio', icon: '📁' },
    { id: 'contact', label: 'Contact', icon: '✉️' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = (pageId) => {
    setCurrentPage(pageId);
    setActiveSubmenu(null);
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  const handleSubmenuClick = (service) => {
    alert(`Selected service: ${service}`);
    setActiveSubmenu(service);
  };

  return (
    <nav className="menu-container">
      <button 
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'} Menu
      </button>
      
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item-wrapper">
            <button
              className={`menu-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
              {item.submenu && <span className="submenu-arrow">▾</span>}
            </button>
            
            {item.submenu && currentPage === item.id && (
              <div className="submenu">
                {item.submenu.map((service, index) => (
                  <button
                    key={index}
                    className={`submenu-item ${activeSubmenu === service ? 'active' : ''}`}
                    onClick={() => handleSubmenuClick(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <div className="menu-stats">
          <p>Total Pages: {menuItems.length}</p>
          <p>Current: {currentPage}</p>
        </div>
      </div>
    </nav>
  );
};

export default Menu;