import React from 'react';
import { Award, Users, MapPin, Heart } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const About = () => {
  const team = [
    {
      name: "John Mukasa",
      position: "Managing Director",
      description: "15+ years in tourism industry with extensive knowledge of East African wildlife",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    },
    {
      name: "Sarah Nakato",
      position: "Safari Operations Manager",
      description: "Expert in gorilla trekking and wildlife conservation with local community connections",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
    },
    {
      name: "David Ssemakula",
      position: "Fleet Manager",
      description: "Ensures all vehicles are in perfect condition for safe and comfortable journeys",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg"
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Our love for Africa drives us to share its beauty with the world"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "We support local communities and conservation efforts"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Authenticity",
      description: "We provide genuine, authentic African experiences"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="About Pullman Safaris"
        subtitle="Your trusted partner for African adventures since 2008"
        showCTA={false}
      />

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2008, Pullman Safaris and Car Rentals Ltd has been at the forefront of Uganda's tourism industry, 
                  providing exceptional safari experiences and reliable transportation services to thousands of satisfied clients.
                </p>
                <p>
                  Our journey began with a simple mission: to showcase the incredible natural beauty and wildlife of East Africa 
                  while providing safe, comfortable, and memorable experiences for our clients.
                </p>
                <p>
                  Over the years, we have built strong relationships with local communities, conservation organizations, and 
                  tourism authorities, enabling us to offer unique and authentic experiences that benefit both visitors and locals.
                </p>
              </div>
            </div>
            <div className="h-96 bg-cover bg-center rounded-lg" 
                 style={{ backgroundImage: "url('https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg')" }}>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional safari experiences and reliable car rental services that exceed expectations, 
                while promoting sustainable tourism and supporting local communities in Uganda and Kenya.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be East Africa's leading safari and car rental company, recognized for our commitment to excellence, 
                sustainability, and authentic African experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to making your African adventure unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-700 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Pullman Safaris?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="opacity-90">Deep knowledge of East African wildlife, culture, and hidden gems</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Safety First</h3>
              <p className="opacity-90">Well-maintained vehicles and experienced, licensed guides</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
              <p className="opacity-90">Best value for money with transparent pricing and no hidden costs</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="opacity-90">Round-the-clock assistance throughout your journey</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Sustainable Tourism</h3>
              <p className="opacity-90">Committed to conservation and community development</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Custom Experiences</h3>
              <p className="opacity-90">Tailored itineraries to match your interests and budget</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;