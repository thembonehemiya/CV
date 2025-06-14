import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Award, MapPin, Car, Binary as Binoculars } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const featuredDestinations = [
    {
      name: "Bwindi Impenetrable National Park",
      description: "Home to mountain gorilla trekking experiences",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
      link: "/destinations/bwindi"
    },
    {
      name: "Queen Elizabeth National Park",
      description: "Tree-climbing lions and Kazinga Channel boat safari",
      image:  "/images/pp.jpg",
      link: "/destinations/queen-elizabeth"
    },
    {
      name: "Murchison Falls National Park",
      description: "The most beautiful protected area in Uganda",
      image: "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg",
      link: "/destinations/murchison-falls"
    }
  ];

  const services = [
    {
      icon: <Binoculars className="w-8 h-8" />,
      title: "Safari Packages",
      description: "Expertly crafted safari experiences across Uganda and Kenya"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Car Rentals",
      description: "Self-drive and chauffeur-driven vehicles for all occasions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Tours",
      description: "Customized group excursions and corporate travel solutions"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Destinations" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div>
      <HeroSection 
        title="Explore Africa with Confidence"
        subtitle="Unforgettable safari experiences and reliable car rentals across Uganda and Kenya"
      />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From thrilling wildlife encounters to comfortable transportation, we provide comprehensive travel solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most spectacular wildlife destinations in East Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <Link key={index} to={destination.link} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${destination.image})` }}>
                    <div className="h-full bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                    <p className="text-gray-600">{destination.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/safaris"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View All Safaris
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Pullman Safaris?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Local Knowledge</h3>
                    <p className="text-gray-600">15+ years of experience in East African tourism</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Exceptional Service</h3>
                    <p className="text-gray-600">98% customer satisfaction rate with personalized attention</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Coverage</h3>
                    <p className="text-gray-600">50+ destinations across Uganda and Kenya</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg')" }}>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your African Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us create an unforgettable experience tailored to your dreams and preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Start Planning
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;