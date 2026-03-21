import './About.css';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image fade-in">
            <div className="image-stack">
              <img src="/hero.png" alt="Our Work" className="main-img" />
              <div className="experience-badge tint-glass">
                <span className="years">15+</span>
                <span className="text">Years of Experience</span>
              </div>
            </div>
          </div>
          
          <div className="about-text fade-in">
            <span className="section-subtitle">Since 2008</span>
            <h2>Leading the Industry in HVAC & Engineering Excellence</h2>
            <p>
              Under the visionary leadership of our CEO, <strong>G BASKAR</strong>, 
              BDG Aircon Sales and Services has been at the forefront of providing 
              innovative and reliable cooling solutions. We specialize in catering 
              to both domestic and industrial segments with a commitment to 
              quality that is second to none.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>1.2k+</h3>
                <p>Projects Done</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Customer Support</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Satisfaction</p>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary">Our Story</a>
          </div>
        </div>
      </div>
    </section>
  );
};
