import { 
  Wind, 
  Settings, 
  ShieldCheck, 
  Droplets, 
  Wrench, 
  Zap 
} from 'lucide-react';
import './Services.css';

const services = [
  {
    title: 'AC Installation',
    description: 'Expert installation of residential and commercial air conditioning systems with optimization for energy efficiency.',
    icon: <Wind size={32} />
  },
  {
    title: 'Annual Maintenance (AMC)',
    description: 'Scheduled preventive maintenance to ensure your AC runs peak performance year-round.',
    icon: <Settings size={32} />
  },
  {
    title: 'AHU & FCU Servicing',
    description: 'Specialized cleaning and maintenance for Air Handling Units and Fan Coil Units in commercial buildings.',
    icon: <ShieldCheck size={32} />
  },
  {
    title: 'Chiller Tube Cleaning',
    description: 'Professional descaling and cleaning of chiller tubes to improve heat exchange efficiency.',
    icon: <Droplets size={32} />
  },
  {
    title: 'Breakdown Repair',
    description: 'Fast response and expert repair services for all major AC brands and industrial HVAC systems.',
    icon: <Wrench size={32} />
  },
  {
    title: 'Electrical & Ducting',
    description: 'Complete electrical wiring and ducting solutions for large-scale industrial cooling projects.',
    icon: <Zap size={32} />
  }
];

export const Services = () => {
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
              <a href="#contact" className="service-link">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
