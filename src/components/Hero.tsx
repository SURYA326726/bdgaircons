import { ArrowRight, CheckCircle } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text fade-in">
          <span className="hero-badge">Expert Air Conditioning Solutions</span>
          <h1>Premium Cooling for Your Home & Business</h1>
          <p>
            BDG Aircon Sales and Services provides top-tier installation, 
            maintenance, and repair for all types of air conditioning systems. 
            Keep your environment cool and healthy.
          </p>
          <div className="hero-features">
            <div className="hero-feature">
              <CheckCircle size={18} className="feature-icon" />
              <span>24/7 Support</span>
            </div>
            <div className="hero-feature">
              <CheckCircle size={18} className="feature-icon" />
              <span>Certified Technicians</span>
            </div>
            <div className="hero-feature">
              <CheckCircle size={18} className="feature-icon" />
              <span>Best Price Guarantee</span>
            </div>
          </div>
          <div className="hero-btns">
            <a href="#services" className="btn btn-primary">
              View Our Services
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
