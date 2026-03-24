import React from 'react';
import { 
  CheckCircle, 
  Settings, 
  Wind, 
  Shield, 
  Cpu, 
  X 
} from 'lucide-react';
import './ACInstallationDetail.css';

interface ACInstallationDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ACInstallationDetail: React.FC<ACInstallationDetailProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="detail-modal-overlay">
      <div className="detail-modal-content fade-in">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <div className="header-icon">
            <Wind size={48} />
          </div>
          <h2>AC Installation Services</h2>
          <div className="header-underline"></div>
        </div>

        <div className="modal-body">
          <section className="detail-section">
            <div className="section-title-wrapper">
              <Shield className="section-icon" />
              <h3>Professional & Expert Setup</h3>
            </div>
            <p>
              We provide end-to-end AC installation services tailored for both residential and commercial spaces. 
              Our expert technicians ensure proper placement, secure mounting, and efficient airflow setup to 
              maximize cooling performance while minimizing energy consumption. From split ACs to central systems, 
              we guarantee safe and reliable installation with long-term efficiency in mind.
            </p>
          </section>

          <section className="detail-section highlight-box">
            <div className="section-title-wrapper">
              <CheckCircle className="section-icon" />
              <h3>Customer-Friendly Solutions</h3>
            </div>
            <p>
              Our AC installation service is designed to give you the best cooling experience from day one. 
              We carefully assess your space, recommend the right positioning, and install your system with precision. 
              This helps reduce electricity bills and improves overall performance. Sit back and relax while 
              we handle everything smoothly and professionally.
            </p>
          </section>

          <section className="detail-section">
            <div className="section-title-wrapper">
              <Settings className="section-icon" />
              <h3>Detailed Technical Process</h3>
            </div>
            <p>
              We specialize in installing all types of air conditioning systems with a focus on energy efficiency 
              and durability. Our process includes:
            </p>
            <ul className="technical-list">
              <li><span className="list-bullet">•</span> Comprehensive site inspection and load calculation</li>
              <li><span className="list-bullet">•</span> Strategic unit positioning for optimal airflow</li>
              <li><span className="list-bullet">•</span> Secure electrical connections and vibration-free mounting</li>
              <li><span className="list-bullet">•</span> System optimization to extend equipment lifespan</li>
            </ul>
          </section>

          <section className="detail-section footer-summary">
            <div className="section-title-wrapper">
              <Cpu className="section-icon" />
              <h3>Short & Reliable</h3>
            </div>
            <p className="summary-text">
              Get reliable AC installation services with expert handling and energy-efficient setup. 
              We ensure your system runs smoothly, cools effectively, and saves power from the start.
            </p>
          </section>
        </div>

        <div className="modal-footer">
          <button className="cta-button" onClick={onClose}>Understood</button>
        </div>
      </div>
    </div>
  );
};
