import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import DoveLogo from './DoveLogo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [patientInfoOpen, setPatientInfoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-blue-50 py-4'
      }`}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <DoveLogo className="h-10 w-auto" />
          <span className="ml-2 font-semibold text-blue-800 text-xl">Dove Medical Services</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'font-semibold text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'font-semibold text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}>About</Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'font-semibold text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}>Services</Link>
          
          <div className="relative group">
            <button 
              className={`flex items-center ${
                location.pathname.includes('/patient-info') ? 'font-semibold text-blue-700' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setPatientInfoOpen(!patientInfoOpen)}
            >
              Patient Info {patientInfoOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className={`absolute left-0 w-64 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg transition-all duration-300 ${
              patientInfoOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
              <div className="py-1">
                <Link to="/patient-info" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Overview</Link>
                <Link to="/patient-info/admission-process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Admission Process</Link>
                <Link to="/patient-info/discharge-process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Discharge Process</Link>
                <Link to="/patient-info/billing-process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Billing Process</Link>
                <Link to="/patient-info/patient-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Patient Registration</Link>
                <Link to="/patient-info/pre-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Pre-Counselling</Link>
              </div>
            </div>
          </div>
          
          <Link to="/community-outreach" className={`nav-link ${location.pathname === '/community-outreach' ? 'font-semibold text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}>Outreach</Link>
          <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'font-semibold text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}>FAQs</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'font-semibold text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}>Contact</Link>
          <Link to="/book-appointment" className="btn-primary">Book Appointment</Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg animate-fadeIn`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50">About</Link>
          <Link to="/services" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50">Services</Link>
          
          <div>
            <button 
              onClick={() => setPatientInfoOpen(!patientInfoOpen)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md font-medium hover:bg-blue-50"
            >
              Patient Info {patientInfoOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className={`dropdown-menu ${patientInfoOpen ? 'open' : ''} pl-4`}>
              <Link to="/patient-info" className="block px-3 py-2 text-sm rounded-md hover:bg-blue-50">Overview</Link>
              <Link to="/patient-info/admission-process" className="block px-3 py-2 text-sm rounded-md hover:bg-blue-50">Admission Process</Link>
              <Link to="/patient-info/discharge-process" className="block px-3 py-2 text-sm rounded-md hover:bg-blue-50">Discharge Process</Link>
              <Link to="/patient-info/billing-process" className="block px-3 py-2 text-sm rounded-md hover:bg-blue-50">Billing Process</Link>
              <Link to="/patient-info/patient-registration" className="block px-3 py-2 text-sm rounded-md hover:bg-blue-50">Patient Registration</Link>
              <Link to="/patient-info/pre-counselling" className="block px-3 py-2 text-sm rounded-md hover:bg-blue-50">Pre-Counselling</Link>
            </div>
          </div>
          
          <Link to="/community-outreach" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50">Outreach</Link>
          <Link to="/faq" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50">FAQs</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50">Contact</Link>
          <Link to="/book-appointment" className="block px-3 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700">Book Appointment</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;