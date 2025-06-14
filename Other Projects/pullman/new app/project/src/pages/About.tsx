import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Pullman Safaris</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For years, we've been Uganda's trusted partner in creating unforgettable safari experiences 
            and providing reliable transportation solutions across East Africa.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Pullman Safaris and Car Rentals Ltd was founded with a simple mission: to showcase 
              Uganda's incredible natural beauty while providing exceptional service that exceeds 
              our clients' expectations.
            </p>
            <p className="text-gray-600 mb-4">
              From our base in Kampala, we've grown to become one of Uganda's most trusted safari 
              and car rental companies, serving tourists, corporate clients, NGOs, and business 
              travelers from around the world.
            </p>
            <p className="text-gray-600">
              Our deep knowledge of Uganda's national parks, wildlife, and culture, combined with 
              our commitment to sustainable tourism, ensures that every journey with us contributes 
              to conservation efforts and local community development.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Car Rental Fleet"
                className="w-full rounded-lg shadow-lg"
              />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-600">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional safari experiences and reliable transportation services 
                that showcase Uganda's natural wonders while supporting conservation efforts 
                and local communities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-600">Our Vision</h3>
              <p className="text-gray-600">
                To be East Africa's leading safari and car rental company, recognized for our 
                commitment to excellence, sustainability, and creating life-changing experiences 
                for our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pullman Safaris?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">
                Professional, licensed guides with extensive knowledge of Uganda's wildlife and culture.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
              <p className="text-gray-600">
                Customized itineraries and small group sizes for intimate, memorable experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of local customs, hidden gems, and the best wildlife viewing spots.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Tourism</h3>
              <p className="text-gray-600">
                Committed to responsible tourism that benefits wildlife conservation and local communities.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">James Mugisha</h3>
              <p className="text-green-600 font-semibold mb-2">Managing Director</p>
              <p className="text-gray-600">
                With over 15 years in the tourism industry, James leads our team with passion 
                for Uganda's natural heritage.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Sarah Nakato</h3>
              <p className="text-green-600 font-semibold mb-2">Operations Manager</p>
              <p className="text-gray-600">
                Sarah ensures every safari runs smoothly, coordinating logistics and 
                maintaining our high service standards.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Paul Byamukama</h3>
              <p className="text-green-600 font-semibold mb-2">Senior Guide</p>
              <p className="text-gray-600">
                A wildlife expert and conservationist, Paul has guided thousands of visitors 
                through Uganda's national parks.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications & Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Licensed & Certified</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Licensed by Uganda Tourism Board</li>
                <li>• Member of Association of Uganda Tour Operators (AUTO)</li>
                <li>• Certified by Uganda Wildlife Authority</li>
                <li>• ISO 9001 Quality Management System</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Conservation Partners</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Uganda Wildlife Authority (UWA)</li>
                <li>• Jane Goodall Institute</li>
                <li>• Mountain Gorilla Conservation Fund</li>
                <li>• Local Community Conservation Groups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;