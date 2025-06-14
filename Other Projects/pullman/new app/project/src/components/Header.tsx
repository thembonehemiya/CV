import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone size={14} className="mr-1" />
                <span>+256 702 551 090</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-1" />
                <span>info@pullmansafaris.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Plot 12B Sir Apollo Kaggwa Rd, Kampala, Uganda</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Header */}
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Pullman Safaris
            </h1>
            <p className="text-white text-xl md:text-2xl">
              Explore Africa with Confidence
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-green-800">
                Pullman Safaris
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/safaris"
                className={`font-medium transition-colors ${
                  isActive('/safaris') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Safaris
              </Link>
              <Link
                to="/car-rentals"
                className={`font-medium transition-colors ${
                  isActive('/car-rentals') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Car Rentals
              </Link>
              <Link
                to="/testimonials"
                className={`font-medium transition-colors ${
                  isActive('/testimonials') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors ${
                  isActive('/contact') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/booking"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/safaris"
                className="block py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Safaris
              </Link>
              <Link
                to="/car-rentals"
                className="block py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Car Rentals
              </Link>
              <Link
                to="/testimonials"
                className="block py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/booking"
                className="block py-2 bg-green-600 text-white px-4 rounded-lg mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;