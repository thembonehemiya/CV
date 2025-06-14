import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Safaris = () => {
  const safariDestinations = [
    {
      id: 'bwindi',
      name: 'Bwindi Impenetrable National Park',
      location: 'Southwestern Uganda',
      duration: '2-3 Days',
      groupSize: '2-8 People',
      rating: 4.9,
      price: 'From $450/person',
      highlight: 'Mountain Gorilla Trekking',
      description: 'UNESCO World Heritage Site famous for mountain gorilla encounters',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
      activities: ['Gorilla tracking', 'Birding', 'Forest walks', 'Cultural visits']
    },
    {
      id: 'queen-elizabeth',
      name: 'Queen Elizabeth National Park',
      location: 'Western Uganda',
      duration: '2-4 Days',
      groupSize: '2-12 People',
      rating: 4.8,
      price: 'From $320/person',
      highlight: 'Tree-climbing Lions & Boat Safari',
      description: 'Famous for tree-climbing lions and Kazinga Channel boat safari',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg',
      activities: ['Game drives', 'Boat cruises', 'Chimp trekking', 'Bird watching']
    },
    {
      id: 'murchison-falls',
      name: 'Murchison Falls National Park',
      location: 'Northern Uganda',
      duration: '3 Days',
      groupSize: '2-15 People',
      rating: 4.7,
      price: 'From $385/person',
      highlight: 'Devils Cauldron & Nile Cruise',
      description: 'The most beautiful protected area in Uganda with spectacular waterfalls',
      image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
      activities: ['Game drives', 'Nile cruise', 'Rhino tracking', 'Waterfall viewing']
    },
    {
      id: 'kibale',
      name: 'Kibale Forest National Park',
      location: 'Near Fort Portal',
      duration: '1-2 Days',
      groupSize: '2-8 People',
      rating: 4.6,
      price: 'From $280/person',
      highlight: 'Chimpanzee Tracking',
      description: 'Home to 13 primate species including chimpanzees',
      image: 'https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg',
      activities: ['Chimpanzee tracking', 'Primate watching', 'Birding', 'Nature walks']
    },
    {
      id: 'rwenzori',
      name: 'Rwenzori Mountains National Park',
      location: 'Western Uganda',
      duration: '5-12 Days',
      groupSize: '2-6 People',
      rating: 4.8,
      price: 'From $650/person',
      highlight: 'Snow-capped Peaks & Glaciers',
      description: 'Africa\'s highest mountain range with glaciers and unique flora',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
      activities: ['Mountaineering', 'Multi-day hikes', 'Photography', 'Cultural tours']
    },
    {
      id: 'lake-mburo',
      name: 'Lake Mburo National Park',
      location: 'Western Uganda',
      duration: '1-2 Days',
      groupSize: '2-10 People',
      rating: 4.5,
      price: 'From $240/person',
      highlight: 'Walking Safaris & Zebras',
      description: 'Closest park to Kampala with unique walking safari experiences',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg',
      activities: ['Walking safaris', 'Biking', 'Boat rides', 'Horse riding']
    },
    {
      id: 'jinja',
      name: 'Source of the Nile - Jinja',
      location: 'Eastern Uganda',
      duration: '1-3 Days',
      groupSize: '2-20 People',
      rating: 4.7,
      price: 'From $180/person',
      highlight: 'White-water Rafting & Adventure',
      description: 'Historic source of River Nile with thrilling adventure activities',
      image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
      activities: ['White-water rafting', 'Bungee jumping', 'Boat cruises', 'Quad biking']
    },
    {
      id: 'ssese-islands',
      name: 'Ssese Islands',
      location: 'Lake Victoria',
      duration: '2-4 Days',
      groupSize: '2-12 People',
      rating: 4.4,
      price: 'From $220/person',
      highlight: 'Beach Relaxation & Island Life',
      description: '84 tropical islands offering peace and tranquility on Lake Victoria',
      image: 'https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg',
      activities: ['Beach relaxation', 'Fishing', 'Nature walks', 'Cultural encounters']
    },
    {
      id: 'lake-bunyonyi',
      name: 'Lake Bunyonyi',
      location: 'Southwestern Uganda',
      duration: '1-3 Days',
      groupSize: '2-15 People',
      rating: 4.6,
      price: 'From $195/person',
      highlight: 'Switzerland of Africa',
      description: 'Uganda\'s most scenic lake with 29 islands and terraced landscapes',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
      activities: ['Canoeing', 'Island hopping', 'Swimming', 'Birdwatching']
    },
    {
      id: 'kenya-safari',
      name: '9 Days Kenya Safari & Coast',
      location: 'Kenya',
      duration: '9 Days',
      groupSize: '2-12 People',
      rating: 4.9,
      price: '$1,556/person',
      highlight: 'Maasai Mara & Mombasa Beach',
      description: 'Complete Kenya experience from wildlife to beaches',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg',
      activities: ['Game drives', 'Beach relaxation', 'Cultural visits', 'Train journey']
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Safari Adventures"
        subtitle="Discover East Africa's most spectacular wildlife destinations"
        backgroundImage="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
        showCTA={false}
      />

      {/* Safari Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safari Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted safari experiences, each designed to showcase the best of East African wildlife
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariDestinations.map((safari) => (
              <Link key={safari.id} to={`/destinations/${safari.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${safari.image})` }}>
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-900">
                      {safari.price}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {safari.highlight}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                        {safari.name}
                      </h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{safari.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{safari.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="truncate">{safari.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{safari.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{safari.groupSize}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {safari.activities.slice(0, 3).map((activity, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          {activity}
                        </span>
                      ))}
                      {safari.activities.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          +{safari.activities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We specialize in creating custom safari experiences tailored to your preferences and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Plan Custom Safari
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safaris;