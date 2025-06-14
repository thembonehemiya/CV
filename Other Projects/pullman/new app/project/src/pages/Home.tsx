import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Car, MapPin, Award, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Uganda's Wild Beauty
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            From gorilla trekking in Bwindi to the source of the Nile in Jinja, 
            experience Uganda's incredible wildlife and landscapes with trusted experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Book a Safari
            </Link>
            <Link
              to="/car-rentals"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
            >
              Rent a Car
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Professional local guides with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Small Groups</h3>
              <p className="text-gray-600">Intimate safari experiences with personalized attention</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Safari Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Tree climbing lions"
                className="w-full h-48 object-cover"
                />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Bwindi Impenetrable NP</h3>
                <p className="text-gray-600 mb-4">
                  World-renowned mountain gorilla trekking experience in UNESCO World Heritage Site.
                </p>
                <div className="flex items-center mb-2">
                  <MapPin size={16} className="text-green-600 mr-1" />
                  <span className="text-sm text-gray-500">Southwestern Uganda</span>
                </div>
                <Link
                  to="/safaris"
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Tree climbing lions"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Queen Elizabeth NP</h3>
                <p className="text-gray-600 mb-4">
                  Famous for tree-climbing lions and boat safaris along Kazinga Channel.
                </p>
                <div className="flex items-center mb-2">
                  <MapPin size={16} className="text-green-600 mr-1" />
                  <span className="text-sm text-gray-500">Western Uganda</span>
                </div>
                <Link
                  to="/safaris"
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Murchison Falls"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Murchison Falls NP</h3>
                <p className="text-gray-600 mb-4">
                  Spectacular waterfalls and Nile river cruises with abundant wildlife viewing.
                </p>
                <div className="flex items-center mb-2">
                  <MapPin size={16} className="text-green-600 mr-1" />
                  <span className="text-sm text-gray-500">Northern Uganda</span>
                </div>
                <Link
                  to="/safaris"
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Rental Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Premium Car Rental Services</h2>
              <p className="text-gray-600 mb-6">
                Whether you need a vehicle for business, leisure, or special occasions, 
                our diverse fleet has the perfect option for you. From economy cars to 
                luxury SUVs and safari vehicles.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Car className="text-green-600 mr-3" size={20} />
                  <span>Self-drive and chauffeur services available</span>
                </li>
                <li className="flex items-center">
                  <Car className="text-green-600 mr-3" size={20} />
                  <span>Short and long-term rentals</span>
                </li>
                <li className="flex items-center">
                  <Car className="text-green-600 mr-3" size={20} />
                  <span>Airport transfers and group excursions</span>
                </li>
              </ul>
              <Link
                to="/car-rentals"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
              >
                View Our Fleet
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Car Rental Fleet"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Exceptional service! The gorilla trekking experience was life-changing. 
                Our guide was knowledgeable and the entire trip was perfectly organized."
              </p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-gray-500">USA Tourist</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Professional car rental service with excellent vehicles. Perfect for our 
                business trips around Kampala. Highly recommended!"
              </p>
              <div className="font-semibold">David Mukasa</div>
              <div className="text-sm text-gray-500">Corporate Client</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="text-green-600 font-semibold hover:text-green-700"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your African Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to plan your perfect safari or book the ideal vehicle for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Plan Your Safari
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;