import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageViews, setPageViews] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Track page views
  useEffect(() => {
    setPageViews(prev => ({
      ...prev,
      [currentPage]: (prev[currentPage] || 0) + 1
    }));
  }, [currentPage]);

  const renderPage = () => {
    const props = {
      views: pageViews[currentPage] || 0,
      onAction: () => console.log(`Action on ${currentPage}`)
    };

    switch(currentPage) {
      case 'home': return <Home {...props} />;
      case 'about': return <About {...props} />;
      case 'services': return <Services {...props} />;
      case 'portfolio': return <Portfolio {...props} />;
      case 'contact': return <Contact {...props} />;
      default: return <Home {...props} />;
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading application...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Navigation App</h1>
        <p className="subtitle">A demonstration of React hooks and routing</p>
      </header>
      
      <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="main-content">
        <div className="page-info">
          <span className="page-tag">Current Page: {currentPage}</span>
          <span className="views-counter">Views: {pageViews[currentPage] || 0}</span>
        </div>
        {renderPage()}
      </main>
      
      <footer className="app-footer">
        <p>© Miron Cornel-Iosif</p>
      </footer>
    </div>
  );
}

export default App;