import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-green-700 text-white p-2 rounded-lg mr-3">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pullman Safaris</h3>
                <p className="text-sm text-gray-300">& Car Rentals Ltd</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Explore East Africa with confidence. We provide exceptional safari experiences and reliable car rental services across Uganda and Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/safaris" className="text-gray-300 hover:text-white transition-colors">Safaris</Link></li>
              <li><Link to="/car-rentals" className="text-gray-300 hover:text-white transition-colors">Car Rentals</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Safari Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations/bwindi" className="text-gray-300 hover:text-white transition-colors">Bwindi Impenetrable</Link></li>
              <li><Link to="/destinations/queen-elizabeth" className="text-gray-300 hover:text-white transition-colors">Queen Elizabeth NP</Link></li>
              <li><Link to="/destinations/murchison-falls" className="text-gray-300 hover:text-white transition-colors">Murchison Falls</Link></li>
              <li><Link to="/destinations/kibale" className="text-gray-300 hover:text-white transition-colors">Kibale Forest</Link></li>
              <li><Link to="/destinations/jinja" className="text-gray-300 hover:text-white transition-colors">Source of the Nile</Link></li>
              <li><Link to="/destinations/kenya-safari" className="text-gray-300 hover:text-white transition-colors">Kenya Safari</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                <p className="text-gray-300">Plot 12B Sir Apollo Kaggwa Rd, Kampala, Uganda</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-green-500" />
                <p className="text-gray-300">+256 702 551 090</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-green-500" />
                <p className="text-gray-300">info@pullmansafaris.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Pullman Safaris and Car Rentals Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;