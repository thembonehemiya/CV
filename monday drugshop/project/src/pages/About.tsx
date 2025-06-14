import React from 'react';
import PageHeader from '../components/PageHeader';
import { IMAGES } from '../utils/constants';

const About: React.FC = () => {
  return (
    <div>
      <PageHeader title="About Us" backgroundImage={IMAGES.ABOUT_HEADER} />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Dove Medical Services was founded with a vision to make compassionate and affordable healthcare available to everyone in our community. Established by a dedicated team of medical professionals, our clinic is built on values of empathy, excellence, and equity.
              </p>
              <p className="mb-4 text-gray-700">
                We began as a small practice focused on preventive care and general medicine, and have since expanded our services to include women's health, chronic disease management, immunizations, diagnostic testing, and wellness support.
              </p>
              <p className="text-gray-700">
                At Dove Medical Services, we believe healthcare is more than just treatment—it's about trust, education, and long-term relationships. We aim to create a welcoming space where patients feel heard, respected, and empowered in their health journey.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={IMAGES.CLINIC_INSIDE} 
                alt="Inside our clinic" 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
              <div className="absolute -top-5 -right-5 bg-blue-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-semibold">Serving Our Community</p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="section-title">Our Mission & Vision</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="section-subtitle mb-3">Mission Statement</h3>
                <p className="text-gray-700">
                  To provide compassionate, high-quality, and accessible healthcare services that empower individuals and families to live healthier, fuller lives. We are committed to delivering patient-centered care with integrity, dignity, and professionalism.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="section-subtitle mb-3">Vision Statement</h3>
                <p className="text-gray-700">
                  To be a trusted leader in community-based healthcare, known for innovation, personalized treatment, and a relentless commitment to the well-being of every patient we serve.
                </p>
              </div>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="section-title">Our Core Values</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Compassion</h3>
                <p className="text-gray-600">We treat every patient with kindness, empathy, and respect, recognizing their unique needs and concerns.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for the highest standards in healthcare delivery, continually improving our skills and services.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Integrity</h3>
                <p className="text-gray-600">We uphold the highest ethical standards, ensuring transparency, honesty, and accountability in all we do.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Accessibility</h3>
                <p className="text-gray-600">We are committed to making quality healthcare accessible to all members of our community.</p>
              </div>
            </div>
          </div>
          
          {/* Our Team */}
          <div>
            <div className="text-center mb-10">
              <h2 className="section-title">Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedicated team of healthcare professionals is committed to providing the highest quality care to our patients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <img 
                  src={IMAGES.TEAM_DOCTOR_1} 
                  alt="Dr. Sarah Namono" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-xl mb-1">Dr. Sarah Namono</h3>
                  <p className="text-blue-600 mb-2">Medical Director</p>
                  <p className="text-gray-600">Specializing in Family Medicine with over 15 years of experience in community healthcare.</p>
                </div>
              </div>
              
              <div className="card">
                <img 
                  src={IMAGES.TEAM_DOCTOR_2} 
                  alt="Dr. John Muwonge" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-xl mb-1">Dr. John Muwonge</h3>
                  <p className="text-blue-600 mb-2">Pediatrician</p>
                  <p className="text-gray-600">Dedicated to children's health with special interest in preventive care and development.</p>
                </div>
              </div>
              
              <div className="card">
                <img 
                  src={IMAGES.TEAM_NURSE} 
                  alt="Nurse Grace Atim" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-xl mb-1">Nurse Grace Atim</h3>
                  <p className="text-blue-600 mb-2">Head Nurse</p>
                  <p className="text-gray-600">Leading our nursing team with compassion and expertise in patient care and management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;