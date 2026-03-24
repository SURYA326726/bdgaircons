import React from 'react';
import { 
  CheckCircle, 
  Settings, 
  Zap, 
  Layers, 
  ShieldCheck, 
  X 
} from 'lucide-react';
import './ElectricalDuctingDetail.css';

interface ElectricalDuctingDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ElectricalDuctingDetail: React.FC<ElectricalDuctingDetailProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="detail-modal-overlay">
      <div className="detail-modal-content fade-in">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header system-gradient">
          <div className="header-icon">
            <Zap size={48} />
          </div>
          <h2>Electrical & Ducting Solutions</h2>
          <div className="header-underline"></div>
        </div>

        <div className="modal-body">
          <section className="detail-section">
            <div className="section-title-wrapper">
              <ShieldCheck className="section-icon" />
              <h3>Professional & Detailed Engineering</h3>
            </div>
            <p>
              We provide complete electrical and ducting solutions tailored for large-scale industrial and 
              commercial HVAC projects. Our services include safe electrical wiring, panel connections, 
              cable routing, and precision duct fabrication and installation. We ensure proper airflow 
              distribution, system safety, and compliance with industry standards for reliable and 
              efficient cooling performance.
            </p>
          </section>

          <section className="detail-section highlight-box system-highlight">
            <div className="section-title-wrapper">
              <CheckCircle className="section-icon" />
              <h3>Customer-Friendly Implementation</h3>
            </div>
            <p>
              From wiring to duct installation, we handle everything needed for your cooling system setup. 
              Our team ensures safe electrical connections and well-designed ducting for smooth airflow, 
              helping your system perform efficiently and reliably in large spaces.
            </p>
          </section>

          <section className="detail-section">
            <div className="section-title-wrapper">
              <Settings className="section-icon" />
              <h3>Technical & Advanced Execution</h3>
            </div>
            <p>
              Our expertise covers end-to-end HVAC backbone infrastructure and airflow balancing:
            </p>
            <ul className="technical-list">
              <li><span className="list-bullet">•</span> Load-based wiring design and control panel installation</li>
              <li><span className="list-bullet">•</span> Comprehensive cable management and routing infrastructure</li>
              <li><span className="list-bullet">•</span> GI/PI duct fabrication, insulation, and precise balancing</li>
              <li><span className="list-bullet">•</span> Minimizing energy loss for maximized industrial durability</li>
            </ul>
          </section>

          <section className="detail-section footer-summary">
            <div className="section-title-wrapper">
              <Layers className="section-icon" />
              <h3>Short & Simple Backbone</h3>
            </div>
            <p className="summary-text text-system">
              Complete electrical and ducting services for efficient airflow, 
              safe wiring, and reliable cooling systems.
            </p>
          </section>
        </div>

        <div className="modal-footer">
          <button className="cta-button system-btn" onClick={onClose}>Engineering Specs Received</button>
        </div>
      </div>
    </div>
  );
};
