import React, { useState } from 'react';  
import { sendContactForm } from '../services/contact';  
import '../styles/contact.css';  

const Contact = () => {  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });  
  const [responseMessage, setResponseMessage] = useState('');  
  const [loading, setLoading] = useState(false);  

  const handleInputChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({ ...formData, [name]: value });  
  };  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    setLoading(true);  
    try {  
      const message = await sendContactForm(formData);  
      setResponseMessage(message);  
    } catch (error) {  
      setResponseMessage('Failed to submit. Please try again.');  
    } finally {  
      setLoading(false);  
      setFormData({ name: '', email: '', message: '' });  
    }  
  };  

  return (  
    <div className="contact-container">  
      <h2>Contact Us</h2>  

      <form onSubmit={handleSubmit} className="contact-form">  
        <div className="form-group">  
          <label htmlFor="name">Name:</label>  
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />  
        </div>  
        <div className="form-group">  
          <label htmlFor="email">Email:</label>  
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />  
        </div>  
        <div className="form-group">  
          <label htmlFor="message">Message:</label>  
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required />  
        </div>  
        <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Submit'}</button>  
      </form>  

      {responseMessage && <p>{responseMessage}</p>}  
    </div>  
  );  
};  

export default Contact;
