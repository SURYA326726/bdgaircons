import React from 'react';
import { 
  CheckCircle, 
  Settings, 
  ShieldCheck, 
  Calendar, 
  TrendingUp, 
  X 
} from 'lucide-react';
import './AMCDetail.css';

interface AMCDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AMCDetail: React.FC<AMCDetailProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="detail-modal-overlay">
      <div className="detail-modal-content fade-in">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header amc-gradient">
          <div className="header-icon">
            <Calendar size={48} />
          </div>
          <h2>Annual Maintenance (AMC)</h2>
          <div className="header-underline"></div>
        </div>

        <div className="modal-body">
          <section className="detail-section">
            <div className="section-title-wrapper">
              <ShieldCheck className="section-icon" />
              <h3>Professional & Clear Performance</h3>
            </div>
            <p>
              Our Annual Maintenance Contract (AMC) ensures your air conditioning system operates at peak efficiency 
              throughout the year. We provide scheduled inspections, filter cleaning, gas level checks, and 
              performance optimization to prevent unexpected breakdowns. Regular maintenance not only improves 
              cooling but also extends the lifespan of your AC unit.
            </p>
          </section>

          <section className="detail-section highlight-box amc-highlight">
            <div className="section-title-wrapper">
              <CheckCircle className="section-icon" />
              <h3>Customer-Friendly Peace of Mind</h3>
            </div>
            <p>
              With our AMC service, you don’t have to worry about AC issues anymore. We take care of regular 
              check-ups, cleaning, and minor fixes to keep your system running smoothly. This helps reduce 
              electricity bills and avoids sudden repair costs, giving you peace of mind all year long.
            </p>
          </section>

          <section className="detail-section">
            <div className="section-title-wrapper">
              <Settings className="section-icon" />
              <h3>Detailed Technical Scope</h3>
            </div>
            <p>
              Our AMC service includes periodic preventive maintenance designed to maximize system reliability:
            </p>
            <ul className="technical-list">
              <li><span className="list-bullet">•</span> Condenser and evaporator coil deep cleaning</li>
              <li><span className="list-bullet">•</span> Comprehensive refrigerant level monitoring</li>
              <li><span className="list-bullet">•</span> Critical electrical component inspection and testing</li>
              <li><span className="list-bullet">•</span> System performance testing and diagnostic reporting</li>
            </ul>
          </section>

          <section className="detail-section footer-summary">
            <div className="section-title-wrapper">
              <TrendingUp className="section-icon" />
              <h3>Short & Simple Solution</h3>
            </div>
            <p className="summary-text">
              Keep your AC running like new with our AMC service. Regular maintenance, 
              better performance, and fewer breakdowns—all in one plan.
            </p>
          </section>
        </div>

        <div className="modal-footer">
          <button className="cta-button amc-btn" onClick={onClose}>Plan Details Received</button>
        </div>
      </div>
    </div>
  );
};
