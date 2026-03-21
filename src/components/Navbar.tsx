import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <a href="/" className="logo-container">
          <img src="/logo.png" alt="BDG Aircons" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title">BDG</span>
            <span className="logo-subtitle">AIRCONS SALES & SERVICES</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <div className="nav-actions">
            <a href="tel:+918925313517" className="btn btn-primary btn-call">
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open glass' : ''}`}>
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        <a href="tel:+918925313517" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Call Now</a>
      </div>
    </nav>
  );
};
