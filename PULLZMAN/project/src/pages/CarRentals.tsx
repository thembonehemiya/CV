import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Users, Shield, Clock, CheckCircle, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const CarRentals = () => {
  const vehicleCategories = [
    {
      category: "Economy Cars",
      description: "Perfect for city driving and short trips",
      vehicles: ["Toyota Vitz", "Nissan March", "Honda Fit"],
      priceRange: "$25-35/day",
      features: ["Fuel efficient", "Easy parking", "Automatic transmission"],
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
    },
    {
      category: "SUVs & 4WDs",
      description: "Ideal for safari adventures and rough terrain",
      vehicles: ["Toyota Land Cruiser", "Toyota RAV4", "Nissan X-Trail"],
      priceRange: "$60-120/day",
      features: ["4WD capability", "High clearance", "Safari ready"],
      image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg"
    },
    {
      category: "Safari Land Cruisers",
      description: "Professional safari vehicles with pop-up roofs",
      vehicles: ["Toyota Land Cruiser V8", "Land Cruiser Prado"],
      priceRange: "$100-150/day",
      features: ["Pop-up roof", "Game viewing", "Professional grade"],
      image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg"
    },
    {
      category: "Vans & Buses",
      description: "Perfect for group travel and family trips",
      vehicles: ["Toyota Hiace", "Nissan Urvan", "Coaster Bus"],
      priceRange: "$80-200/day",
      features: ["Group seating", "Luggage space", "Air conditioning"],
      image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg"
    },
    {
      category: "Luxury Cars",
      description: "Premium vehicles for special occasions",
      vehicles: ["Mercedes Benz", "BMW Series", "Audi"],
      priceRange: "$150-300/day",
      features: ["Luxury interior", "Premium comfort", "Professional chauffeur"],
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
    },
    {
      category: "Bridal Cars",
      description: "Elegant vehicles for your special day",
      vehicles: ["Rolls Royce", "Bentley", "Mercedes S-Class"],
      priceRange: "$200-500/day",
      features: ["Wedding decoration", "Professional chauffeur", "Red carpet service"],
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
    }
  ];

  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Self-Drive Rentals",
      description: "Take control of your journey with our well-maintained vehicles"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Chauffeur Services",
      description: "Professional drivers who know Uganda and Kenya like the back of their hand"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Airport Transfers",
      description: "Reliable pickup and drop-off services to and from airports"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Corporate Rentals",
      description: "Long-term rental solutions for businesses and organizations"
    }
  ];

  const features = [
    "Comprehensive insurance coverage",
    "24/7 roadside assistance",
    "GPS navigation systems",
    "Unlimited mileage options",
    "Flexible pickup/drop-off locations",
    "Multi-language driver support"
  ];

  return (
    <div>
      <HeroSection 
        title="Car Rentals"
        subtitle="Reliable vehicles for every journey across Uganda and Kenya"
        backgroundImage="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg"
        showCTA={false}
      />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Rental Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From economy cars to luxury safari vehicles, we have the perfect vehicle for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6">
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

      {/* Vehicle Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vehicle Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse fleet of well-maintained vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicleCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${category.image})` }}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                    <span className="text-green-600 font-bold">{category.priceRange}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Available Models:</h4>
                    <ul className="text-sm text-gray-600">
                      {category.vehicles.map((vehicle, vIndex) => (
                        <li key={vIndex}>• {vehicle}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, fIndex) => (
                        <span key={fIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Rentals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Car Rentals?
              </h2>
              <p className="text-gray-600 mb-8">
                With over 15 years of experience in the industry, we provide reliable, safe, and comfortable vehicles 
                for all your transportation needs across Uganda and Kenya.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg')" }}>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Rental Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get on the road in just a few easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Vehicle</h3>
              <p className="text-gray-600">Select from our wide range of vehicles</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Online</h3>
              <p className="text-gray-600">Complete your reservation online or by phone</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pick Up</h3>
              <p className="text-gray-600">Collect your vehicle at the agreed location</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enjoy</h3>
              <p className="text-gray-600">Hit the road and enjoy your journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your perfect vehicle today and explore Uganda and Kenya with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarRentals;