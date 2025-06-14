import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'bg-white' : 'bg-light'} fixed-top`} 
           style={{ transition: 'all 0.3s ease' }}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <Stethoscope size={24} className="me-2" color="#1A73E8" />
            <span>Dave Community Clinic</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/doctors">
                  Doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/blog">
                  Health Tips
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/patient-portal">
                  Patient Portal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-primary text-white ms-lg-3 px-4" to="/appointment">
                  Book Appointment
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: '56px' }}></div>
    </header>
  );
};

export default Header;