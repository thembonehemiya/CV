import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="header-image d-flex align-items-center" 
      style={{ backgroundImage: 'url("https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 header-content">
            <h1 className="display-4 fw-bold mb-4 slide-up">Quality Healthcare for Your Family</h1>
            <p className="lead mb-4 fade-in">Dave Community Clinic provides comprehensive medical services with a focus on patient care and community well-being.</p>
            <div className="d-flex gap-3 fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/appointment" className="btn btn-primary btn-lg">Book Appointment</Link>
              <Link to="/services" className="btn btn-outline-light btn-lg">Our Services</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;