import React from 'react';
import { 
  CheckCircle, 
  Settings, 
  Droplets, 
  ShieldCheck, 
  Activity, 
  X 
} from 'lucide-react';
import './ChillerTubeCleaningDetail.css';

interface ChillerTubeCleaningDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChillerTubeCleaningDetail: React.FC<ChillerTubeCleaningDetailProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="detail-modal-overlay">
      <div className="detail-modal-content fade-in">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header chiller-gradient">
          <div className="header-icon">
            <Droplets size={48} />
          </div>
          <h2>Chiller Tube Cleaning</h2>
          <div className="header-underline"></div>
        </div>

        <div className="modal-body">
          <section className="detail-section">
            <div className="section-title-wrapper">
              <Activity className="section-icon" />
              <h3>Professional & Detailed Efficiency</h3>
            </div>
            <p>
              Our chiller tube cleaning service focuses on restoring optimal heat transfer efficiency by 
              removing scale, sludge, and deposits from condenser and evaporator tubes. Using advanced 
              descaling techniques and safe chemical treatments, we ensure improved system performance, 
              reduced energy consumption, and prevention of costly breakdowns. Regular cleaning helps 
              extend the life of your chiller system and maintains consistent cooling output.
            </p>
          </section>

          <section className="detail-section highlight-box chiller-highlight">
            <div className="section-title-wrapper">
              <CheckCircle className="section-icon" />
              <h3>Customer-Friendly Maintenance</h3>
            </div>
            <p>
              Keep your chiller system running efficiently with our expert tube cleaning service. 
              We remove dirt and buildup inside the tubes to improve cooling performance and 
              reduce power usage. This helps avoid unexpected failures and keeps your system 
              working smoothly for longer.
            </p>
          </section>

          <section className="detail-section">
            <div className="section-title-wrapper">
              <Settings className="section-icon" />
              <h3>Technical & Advanced Process</h3>
            </div>
            <p>
              Our specialized chiller maintenance targets fouling and scaling to restore thermal conductivity:
            </p>
            <ul className="technical-list">
              <li><span className="list-bullet">•</span> Precision mechanical brushing for physical deposit removal</li>
              <li><span className="list-bullet">•</span> Targeted chemical descaling for mineral buildup</li>
              <li><span className="list-bullet">•</span> High-pressure water jet cleaning for deep surface restoration</li>
              <li><span className="list-bullet">•</span> Fouling and biofilm eradication for reliable performance</li>
            </ul>
          </section>

          <section className="detail-section footer-summary">
            <div className="section-title-wrapper">
              <ShieldCheck className="section-icon" />
              <h3>Short & Simple Goal</h3>
            </div>
            <p className="summary-text text-chiller">
              Efficient chiller tube cleaning to boost performance, 
              save energy, and extend system life.
            </p>
          </section>
        </div>

        <div className="modal-footer">
          <button className="cta-button chiller-btn" onClick={onClose}>Efficiency Protocol Noted</button>
        </div>
      </div>
    </div>
  );
};
