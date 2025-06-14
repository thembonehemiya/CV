import React from 'react';
import { Mountain, Facebook, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-forest-300" />
              <h3 className="text-xl font-bold">RMCI</h3>
            </div>
            <p className="text-forest-100 mb-4 leading-relaxed">
              Conserving and restoring the unique ecosystems of the Rwenzori Mountains while empowering local communities through sustainable land use and nature-based livelihoods.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-forest-300" />
                <span className="text-sm">K anyatsi II Village, Kitholhu County, Kasese District, Western Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-forest-300" />
                <span className="text-sm">+256 786 263 701</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-forest-300" />
                <span className="text-sm">info@rmci-uganda.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-forest-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/projects" className="text-forest-100 hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="/get-involved" className="text-forest-100 hover:text-white transition-colors">Get Involved</a></li>
              <li><a href="/donate" className="text-forest-100 hover:text-white transition-colors">Donate</a></li>
              <li><a href="/blog" className="text-forest-100 hover:text-white transition-colors">News & Updates</a></li>
              <li><a href="/contact" className="text-forest-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-forest-100 text-sm mb-4">Subscribe to our newsletter for updates on our conservation work.</p>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
              />
              <button className="w-full mt-2 bg-forest-600 hover:bg-forest-700 text-white py-2 px-4 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-forest-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-800 mt-8 pt-8 text-center">
          <p className="text-forest-100 text-sm">
            © 2025 Rwenzori Mountains Conservation Initiative (RMCI). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;