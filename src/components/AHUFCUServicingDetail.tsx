import React from 'react';
import { 
  CheckCircle, 
  Settings, 
  Wind, 
  ShieldCheck, 
  Zap, 
  X 
} from 'lucide-react';
import './AHUFCUServicingDetail.css';

interface AHUFCUServicingDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AHUFCUServicingDetail: React.FC<AHUFCUServicingDetailProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="detail-modal-overlay">
      <div className="detail-modal-content fade-in">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header ahu-gradient">
          <div className="header-icon">
            <ShieldCheck size={48} />
          </div>
          <h2>AHU & FCU Servicing</h2>
          <div className="header-underline"></div>
        </div>

        <div className="modal-body">
          <section className="detail-section">
            <div className="section-title-wrapper">
              <Wind className="section-icon" />
              <h3>Professional & Detailed Approach</h3>
            </div>
            <p>
              Our AHU (Air Handling Unit) and FCU (Fan Coil Unit) servicing is designed for commercial and 
              industrial environments where air quality and system efficiency are critical. We perform deep 
              cleaning of coils, filters, and blowers, along with inspection of motors, ducts, and drainage 
              systems. This ensures optimal airflow, improved indoor air quality, and reduced energy consumption 
              while preventing system failures.
            </p>
          </section>

          <section className="detail-section highlight-box ahu-highlight">
            <div className="section-title-wrapper">
              <CheckCircle className="section-icon" />
              <h3>Customer-Friendly Environment</h3>
            </div>
            <p>
              Keep your building’s cooling system running smoothly with our expert AHU & FCU servicing. 
              We clean, inspect, and maintain all key components to ensure fresh air circulation and 
              consistent cooling. Regular servicing helps avoid breakdowns and keeps your workspace 
              comfortable for everyone.
            </p>
          </section>

          <section className="detail-section">
            <div className="section-title-wrapper">
              <Settings className="section-icon" />
              <h3>Technical & Advanced Maintenance</h3>
            </div>
            <p>
              Our specialized maintenance includes comprehensive technical diagnostics and optimization:
            </p>
            <ul className="technical-list">
              <li><span className="list-bullet">•</span> Precise coil descaling and deep sanitization</li>
              <li><span className="list-bullet">•</span> High-efficiency filter replacement and monitoring</li>
              <li><span className="list-bullet">•</span> Professional blower balancing and motor lubrication</li>
              <li><span className="list-bullet">•</span> Electrical system checks and condensate line inspection</li>
            </ul>
          </section>

          <section className="detail-section footer-summary">
            <div className="section-title-wrapper">
              <Zap className="section-icon" />
              <h3>Short & Simple Promise</h3>
            </div>
            <p className="summary-text text-ahu">
              Professional AHU & FCU servicing for clean air, better cooling, 
              and long-lasting performance in commercial spaces.
            </p>
          </section>
        </div>

        <div className="modal-footer">
          <button className="cta-button ahu-btn" onClick={onClose}>Service Details Noted</button>
        </div>
      </div>
    </div>
  );
};
