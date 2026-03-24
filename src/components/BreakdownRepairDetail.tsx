import React from 'react';
import { 
  CheckCircle, 
  Settings, 
  Wrench, 
  AlertTriangle, 
  Zap, 
  X 
} from 'lucide-react';
import './BreakdownRepairDetail.css';

interface BreakdownRepairDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BreakdownRepairDetail: React.FC<BreakdownRepairDetailProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="detail-modal-overlay">
      <div className="detail-modal-content fade-in">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header repair-gradient">
          <div className="header-icon">
            <Wrench size={48} />
          </div>
          <h2>Breakdown Repair Services</h2>
          <div className="header-underline"></div>
        </div>

        <div className="modal-body">
          <section className="detail-section">
            <div className="section-title-wrapper">
              <Zap className="section-icon" />
              <h3>Professional & Detailed Resolution</h3>
            </div>
            <p>
              Our breakdown repair service ensures quick diagnosis and efficient resolution for all types 
              of air conditioning and HVAC system failures. Our experienced technicians handle issues 
              across major AC brands and complex industrial systems, using advanced tools to identify 
              faults accurately. We focus on restoring your system promptly while minimizing downtime 
              and ensuring long-term reliability.
            </p>
          </section>

          <section className="detail-section highlight-box repair-highlight">
            <div className="section-title-wrapper">
              <CheckCircle className="section-icon" />
              <h3>Customer-Friendly Rescue</h3>
            </div>
            <p>
              Facing an AC breakdown? Don’t worry—we’ve got you covered. Our team responds quickly, 
              finds the problem, and fixes it efficiently so your cooling system is back up and 
              running in no time. We work with all major brands and ensure a hassle-free repair experience.
            </p>
          </section>

          <section className="detail-section">
            <div className="section-title-wrapper">
              <Settings className="section-icon" />
              <h3>Technical & Advanced Troubleshooting</h3>
            </div>
            <p>
              We provide comprehensive breakdown diagnostics and reliable technical solutions:
            </p>
            <ul className="technical-list">
              <li><span className="list-bullet">•</span> Precision fault detection and electrical troubleshooting</li>
              <li><span className="list-bullet">•</span> High-reliability compressor repair and replacement</li>
              <li><span className="list-bullet">•</span> Refrigerant leak identification and environmental fixing</li>
              <li><span className="list-bullet">•</span> Component-level repair to prevent recurring HVAC issues</li>
            </ul>
          </section>

          <section className="detail-section footer-summary">
            <div className="section-title-wrapper">
              <AlertTriangle className="section-icon" />
              <h3>Short & Simple Response</h3>
            </div>
            <p className="summary-text text-repair">
              Quick and reliable AC repair services to get your system back 
              to perfect working condition.
            </p>
          </section>
        </div>

        <div className="modal-footer">
          <button className="cta-button repair-btn" onClick={onClose}>Request Emergency Service</button>
        </div>
      </div>
    </div>
  );
};
