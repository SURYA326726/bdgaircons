import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Get In Touch</h2>
          <p>Have questions about our services or need a quote? Contact us today.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info fade-in">
            <div className="info-card">
              <div className="info-icon"><MapPin /></div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>#2/27, Kattabomman Street, Radha Nagar, Chromepet, Chennai 600045.</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon"><Phone /></div>
              <div className="info-content">
                <h3>Phone & CEO</h3>
                <p>+91 8925313517</p>
                <p><strong>G BASKAR</strong> (CEO)</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon"><Mail /></div>
              <div className="info-content">
                <h3>Email Address</h3>
                <p>bdgaircons@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container fade-in">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Service Type</label>
                <select id="subject">
                  <option>AC Installation</option>
                  <option>Maintenance (AMC)</option>
                  <option>Repair Service</option>
                  <option>Industrial Projects</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
