import React, { useEffect } from 'react';

// Import components
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import DoctorsSection from '../components/home/DoctorsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AppointmentCTA from '../components/home/AppointmentCTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Dave Community Clinic - Quality Healthcare for Everyone';
  }, []);
  
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <DoctorsSection />
      <TestimonialsSection />
      <AppointmentCTA />
    </>
  );
};

export default HomePage;