import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Pullman Safaris And Car Rentals Ltd</h3>
            <p className="text-gray-300 mb-4">
              Uganda's premier safari and car rental company. Explore Africa with confidence and create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/safaris" className="text-gray-300 hover:text-white transition-colors">Safari Packages</a></li>
              <li><a href="/car-rentals" className="text-gray-300 hover:text-white transition-colors">Car Rentals</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Safari Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Top Destinations</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Bwindi Impenetrable NP</span></li>
              <li><span className="text-gray-300">Queen Elizabeth NP</span></li>
              <li><span className="text-gray-300">Murchison Falls NP</span></li>
              <li><span className="text-gray-300">Kibale Forest NP</span></li>
              <li><span className="text-gray-300">Kidepo Valley NP</span></li>
              <li><span className="text-gray-300">Lake Bunyonyi</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Plot 12B Sir Apollo Kaggwa Rd, Kampala, Uganda</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-green-400" />
                <span className="text-gray-300">+256 702 551 090</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-green-400" />
                <span className="text-gray-300">info@pullmansafaris.com</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-4">
              <a
                href="https://wa.me/256702551090"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Pullman Safaris and Car Rentals Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;