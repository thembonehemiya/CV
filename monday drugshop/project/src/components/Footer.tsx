import React from 'react';
import { Link } from 'react-router-dom';
import DoveLogo from './DoveLogo';
import { Facebook, Twitter, Linkedin, Youtube, Clock, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-4">
              <DoveLogo className="bg-white rounded-full p-1" />
              <span className="ml-2 font-bold text-xl">Dove Medical</span>
            </div>
            <p className="text-blue-100 mb-4">
              Providing compassionate, high-quality, and accessible healthcare services to empower individuals and families.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/book-appointment" className="text-blue-100 hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/community-outreach" className="text-blue-100 hover:text-white transition-colors">Community Outreach</Link></li>
              <li><Link to="/faq" className="text-blue-100 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#child-clinic" className="text-blue-100 hover:text-white transition-colors">Young Child Clinic</Link></li>
              <li><Link to="/services#family-planning" className="text-blue-100 hover:text-white transition-colors">Family Planning</Link></li>
              <li><Link to="/services#counselling" className="text-blue-100 hover:text-white transition-colors">Guidance & Counselling</Link></li>
              <li><Link to="/services#hiv-testing" className="text-blue-100 hover:text-white transition-colors">HIV Screening & Testing</Link></li>
              <li><Link to="/services#reproductive" className="text-blue-100 hover:text-white transition-colors">Reproductive Health</Link></li>
              <li><Link to="/services#laboratory" className="text-blue-100 hover:text-white transition-colors">Laboratory Services</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Mubende District, Central Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+256705451656" className="hover:text-blue-200 transition-colors">+256 705 451656</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:thembonehemiya@gmail.com" className="hover:text-blue-200 transition-colors">thembonehemiya@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="mr-2 flex-shrink-0" />
                <span>Open 24/7</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-blue-800 my-6" />
        
        <div className="text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Dove Medical Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;