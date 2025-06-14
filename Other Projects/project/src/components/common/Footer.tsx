import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h4>Dave Community Clinic</h4>
            <p>Providing quality healthcare services to our community since 2010. We are committed to your health and well-being.</p>
            <div className="social-icons mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/">Home</Link></li>
              <li className="mb-2"><Link to="/services">Services</Link></li>
              <li className="mb-2"><Link to="/doctors">Doctors</Link></li>
              <li className="mb-2"><Link to="/appointment">Book Appointment</Link></li>
              <li className="mb-2"><Link to="/patient-portal">Patient Portal</Link></li>
              <li className="mb-2"><Link to="/blog">Health Tips</Link></li>
              <li className="mb-2"><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4>Contact Information</h4>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <MapPin className="me-2 mt-1" size={18} color="#1A73E8" />
                <span>123 Healthcare Avenue, Medical District, City, Country</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Phone className="me-2" size={18} color="#1A73E8" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Mail className="me-2" size={18} color="#1A73E8" />
                <span>info@daveclinic.com</span>
              </li>
              <li className="d-flex align-items-center">
                <Clock className="me-2" size={18} color="#1A73E8" />
                <span>Mon-Fri: 8:00 AM - 8:00 PM<br />Sat-Sun: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} Dave Community Clinic. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              <Link to="/privacy-policy" className="me-3">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;