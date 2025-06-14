import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Phone, MapPin, Heart } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { IMAGES, SERVICES } from '../utils/constants';

const Home: React.FC = () => {
  // Featured services - show just 3 on homepage
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div>
      <HeroSection 
        title="Compassionate Healthcare for All" 
        subtitle="Dove Medical Services offers high-quality, accessible healthcare with a patient-centered approach."
        ctaText="Book an Appointment"
        backgroundImage={IMAGES.HERO}
      />
      
      {/* Quick Info */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Clock className="text-blue-600 mr-3" size={24} />
              <div>
                <h3 className="font-semibold">Open Hours</h3>
                <p className="text-gray-600">24/7 Emergency Care</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="text-blue-600 mr-3" size={24} />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <a href="tel:+256705451656" className="text-gray-600 hover:text-blue-600">+256 705 451656</a>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="text-blue-600 mr-3" size={24} />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Mubende District, Central Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Welcome Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideUp">
              <h2 className="section-title">Welcome to Dove Medical Services</h2>
              <p className="mb-4 text-gray-700">
                At Dove Medical Services, we are dedicated to providing compassionate, high-quality healthcare to our community in Mubende District, Uganda. Our team of experienced medical professionals is committed to your wellbeing.
              </p>
              <p className="mb-6 text-gray-700">
                Whether you need routine check-ups, specialized care, or emergency services, we're here for you 24/7 with a patient-centered approach that prioritizes your health and comfort.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/about" className="btn-secondary">
                  Learn More About Us
                </Link>
                <Link to="/book-appointment" className="btn-primary">
                  Schedule an Appointment
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={IMAGES.CLINIC_OUTSIDE} 
                alt="Dove Medical Services Clinic" 
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-5 -left-5 bg-blue-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <Heart className="mr-2" size={20} />
                  <p className="font-semibold">Trusted Healthcare Since 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of medical services to meet your healthcare needs. Our team is committed to providing the highest quality care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={`/services#${service.id}`} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section bg-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Dove Medical Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand out through our commitment to excellent patient care, experienced medical professionals, and our community-centered approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-blue-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Our doors are always open, providing round-the-clock care for all your health needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-blue-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Staff</h3>
              <p className="text-gray-600">Our team of dedicated healthcare professionals has years of experience in various medical fields.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-blue-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
              <p className="text-gray-600">We believe in treating each patient with dignity, respect, and personalized attention.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-blue-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">We maintain high standards in all our services, ensuring you receive the best possible care.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Schedule Your Visit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards better health by booking an appointment with our healthcare professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-appointment" className="btn-accent">
              Book an Appointment
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-medium py-2 px-4 rounded-md transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;