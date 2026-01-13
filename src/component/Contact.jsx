import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate that environment variables are loaded
    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;
    
    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS configuration. Check your .env file.');
      setAlert({ 
        show: true, 
        message: 'Configuration error. Please contact the site administrator.', 
        type: 'danger' 
      });
      setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 5000);
      return;
    }
    
    // EmailJS configuration - using template variable names that match your EmailJS template
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_subject: formData.subject,
      message: formData.message,
      to_email: 'ferdinandpascal5@gmail.com'
    };

    // Using Vite environment variables for EmailJS credentials
    emailjs.send(
      serviceId, // Service ID from .env
      templateId, // Template ID from .env
      templateParams,
      publicKey // Public key from .env
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      
      // Show success alert using Bootstrap classes
      setAlert({ 
        show: true, 
        message: 'Thank you for your message! We will get back to you soon.', 
        type: 'success' 
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide alert after 5 seconds
      setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 5000);
    }, (error) => {
      console.log('FAILED...', error);
      console.error('EmailJS Error Details:', error.status, error.text);
      // Show error alert using Bootstrap classes
      setAlert({ 
        show: true, 
        message: 'There was an error sending your message. Please try again.', 
        type: 'danger' 
      });
      
      // Hide alert after 5 seconds
      setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 5000);
    });
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Reach out to us for more information about our programs and initiatives.</p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Here's how you can reach us:</p>
              
              <div className="contact-methods">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>ferdinandpascal5@gmail.com</p>
                </div>
                
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>+234 708 439 4859</p>
                </div>
                
                {/* <div className="contact-item">
                  <h3>Address</h3>
                  <p>1234 Hope Street<br />Recovery City, RC 12345</p>
                </div> */}
              </div>
            </div>

            <div className="contact-form">
              <h2>Send Us a Message</h2>
              
              {/* Bootstrap Alert */}
              {alert.show && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                  {alert.message}
                </div>
              )}
              
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
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="map-section">   
        <div className="container">
          <h2>Visit Us</h2>
          <div className="map-placeholder">
            <p>Our Location</p>
            <p>1234 Hope Street, Recovery City, RC 12345</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;