import React, { useState, useEffect } from 'react';
import './Page.css';

const Contact = ({ views, onAction }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(formData.message.length);
  }, [formData.message]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    onAction();
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: '',
        subject: 'general'
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2>Contact Us</h2>
        <p className="page-description">
          Get in touch with our team. We'd love to hear from you!
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">{views}</span>
          <span className="stat-label">Contact Views</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{charCount}</span>
          <span className="stat-label">Chars Typed</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">24/7</span>
          <span className="stat-label">Support</span>
        </div>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>📞 Contact Info</h3>
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Tech Street, Digital City</p>
          <p><strong>Hours:</strong> Mon-Fri, 9AM-6PM EST</p>
        </div>

        <div className="card">
          <h3>⏱️ Response Time</h3>
          <p>We typically respond within:</p>
          <p><strong>Business Hours:</strong> 2-4 hours</p>
          <p><strong>Evenings/Weekends:</strong> Next business day</p>
          <p><strong>Priority Support:</strong> 1 hour</p>
        </div>
      </div>

      <div style={{ maxWidth: '600px', margin: '40px auto' }}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Send us a Message</h3>
        
        {isSubmitted ? (
          <div style={{
            background: '#4CAF50',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3>✅ Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '2px solid #e0e0e0' }}
              >
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales Question</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <small>({charCount}/500 characters)</small>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Enter your message"
                maxLength="500"
              />
            </div>

            <button 
              type="submit" 
              className="action-button"
              style={{ width: '100%' }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;