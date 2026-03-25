import { useState } from 'react';
import { 
  Wind, 
  Settings, 
  ShieldCheck, 
  Droplets, 
  Wrench, 
  Zap 
} from 'lucide-react';
import { ACInstallationDetail } from './ACInstallationDetail';
import { AMCDetail } from './AMCDetail';
import { AHUFCUServicingDetail } from './AHUFCUServicingDetail';
import { ChillerTubeCleaningDetail } from './ChillerTubeCleaningDetail';
import { BreakdownRepairDetail } from './BreakdownRepairDetail';
import { ElectricalDuctingDetail } from './ElectricalDuctingDetail';
import './Services.css';

const services = [
  {
    id: 'ac-installation',
    title: 'AC Installation',
    description: 'Expert installation of residential and commercial air conditioning systems with optimization for energy efficiency.',
    icon: <Wind size={32} />
  },
  {
    id: 'amc',
    title: 'Annual Maintenance (AMC)',
    description: 'Scheduled preventive maintenance to ensure your AC runs peak performance year-round.',
    icon: <Settings size={32} />
  },
  {
    id: 'ahu-fcu',
    title: 'AHU & FCU Servicing',
    description: 'Specialized cleaning and maintenance for Air Handling Units and Fan Coil Units in commercial buildings.',
    icon: <ShieldCheck size={32} />
  },
  {
    id: 'chiller',
    title: 'Chiller Tube Cleaning',
    description: 'Professional descaling and cleaning of chiller tubes to improve heat exchange efficiency.',
    icon: <Droplets size={32} />
  },
  {
    id: 'repair',
    title: 'Breakdown Repair',
    description: 'Fast response and expert repair services for all major AC brands and industrial HVAC systems.',
    icon: <Wrench size={32} />
  },
  {
    id: 'electrical',
    title: 'Electrical & Ducting',
    description: 'Complete electrical wiring and ducting solutions for large-scale industrial cooling projects.',
    icon: <Zap size={32} />
  }
];

export const Services = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveModal(id);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Our Specialized Services</h2>
          <p>We provide comprehensive cooling and engineering solutions tailored to your specific needs.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button 
                className="service-link-btn" 
                onClick={(e) => openModal(e, service.id)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modals */}
      <ACInstallationDetail 
        isOpen={activeModal === 'ac-installation'} 
        onClose={closeModal} 
      />
      <AMCDetail 
        isOpen={activeModal === 'amc'} 
        onClose={closeModal} 
      />
      <AHUFCUServicingDetail 
        isOpen={activeModal === 'ahu-fcu'} 
        onClose={closeModal} 
      />
      <ChillerTubeCleaningDetail 
        isOpen={activeModal === 'chiller'} 
        onClose={closeModal} 
      />
      <BreakdownRepairDetail 
        isOpen={activeModal === 'repair'} 
        onClose={closeModal} 
      />
      <ElectricalDuctingDetail 
        isOpen={activeModal === 'electrical'} 
        onClose={closeModal} 
      />
    </section>
  );
};

