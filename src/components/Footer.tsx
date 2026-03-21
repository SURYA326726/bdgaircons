import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="logo-container">
              <img src="/logo.png" alt="BDG Aircons" className="logo-img" />
              <div className="logo-text">
                <span className="logo-title" style={{ color: 'white' }}>BDG</span>
                <span className="logo-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>AIRCONS SALES & SERVICES</span>
              </div>
            </a>
            <p className="footer-desc">
              Your trusted partner for all air conditioning and cooling solutions. 
              Providing expert services for over 15 years with a focus on quality and reliability.
            </p>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="link-group">
              <h3>Services</h3>
              <a href="#services">AC Installation</a>
              <a href="#services">Maintenance</a>
              <a href="#services">Repairs</a>
              <a href="#services">Industrial Projects</a>
            </div>
            
            <div className="link-group">
              <h3>Contact Us</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                #2/27, Kattabomman Street,<br />
                Radha Nagar, Chromepet,<br />
                Chennai 600045.
              </p>
              <a href="tel:+918925313517">+91 8925313517</a>
              <a href="mailto:bdgaircons@gmail.com">bdgaircons@gmail.com</a>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                <strong>G BASKAR</strong><br />
                CEO
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BDG Aircon Sales and Services. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
