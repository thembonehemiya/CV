import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink = "/book-appointment",
  backgroundImage
}) => {
  return (
    <section 
      className="relative bg-center bg-cover h-[60vh] flex items-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` 
      }}
    >
      <div className="container-custom relative z-10 text-white animate-fadeIn">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-6">{subtitle}</p>
          
          {ctaText && (
            <Link to={ctaLink} className="btn-primary bg-blue-600 hover:bg-blue-700 inline-block">
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;